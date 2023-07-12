import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { User } from '../user/user.model'
import { IUSerLogin } from './auth.interface'

const loginUser = async (payload: IUSerLogin) => {
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

  // create access token
  return {}
}

export const AuthValiadationService = {
  loginUser,
}
