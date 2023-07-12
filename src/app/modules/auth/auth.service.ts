import httpStatus from 'http-status'
import { Secret } from 'jsonwebtoken'
import config from '../../../config'
import { jwtHelpers } from '../../../helpers/jwtHelpers'
import ApiError from '../../errors/ApiError'
import { User } from '../user/user.model'
import { IUSerLogin, IUserLoginResponse } from './auth.interface'

const loginUser = async (payload: IUSerLogin): Promise<IUserLoginResponse> => {
  const { id, password } = payload

  //using statics

  const isUserExists = await User.isUserExists(id)

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

  const { id: userId, role, needsPasswordChange } = isUserExists

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
  console.log(accessToken, refreshToken, needsPasswordChange)
  return {
    accessToken,
    refreshToken,
    needsPasswordChange,
  }
}

export const AuthValiadationService = {
  loginUser,
}
