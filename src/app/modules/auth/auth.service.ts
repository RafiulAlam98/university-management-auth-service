import httpStatus from 'http-status'
import { Secret } from 'jsonwebtoken'
import config from '../../../config'
import { jwtHelpers } from '../../../helpers/jwtHelpers'
import ApiError from '../../errors/ApiError'
import { User } from '../user/user.model'
import {
  IRefreshTokenResponse,
  IUSerLogin,
  IUserLoginResponse,
} from './auth.interface'

const loginUser = async (payload: IUSerLogin): Promise<IUserLoginResponse> => {
  const { id, password } = payload

  //using statics

  const isUserExists = await User.isUserExists(id)
  console.log(isUserExists.role)

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not found')
  }

  //match password

  if (
    isUserExists?.password &&
    !(await User.isPasswordMatched(password, isUserExists?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }

  const { userId, role, needsPasswordChange } = isUserExists

  // create access token
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.secret_expire_in as string
  )

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_secret_expire_in as string
  )
  return {
    accessToken,
    refreshToken,
    needsPasswordChange,
  }
}

const refreshTokenService = async (
  token: string
): Promise<IRefreshTokenResponse> => {
  //verify token
  // invalid token - synchronous
  let verifiedToken = null
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    )
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token')
  }

  //checking deleted user refresh token
  const { id } = verifiedToken
  const isUserExists = await User.isUserExists(id)
  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
  }

  //generate new token
  const newAccessToken = jwtHelpers.createToken(
    {
      id: isUserExists.userId,
      role: isUserExists.role,
    },
    config.jwt.secret as Secret,
    config.jwt.secret_expire_in as string
  )
  return {
    accessToken: newAccessToken,
  }
}

export const AuthValiadationService = {
  loginUser,
  refreshTokenService,
}
