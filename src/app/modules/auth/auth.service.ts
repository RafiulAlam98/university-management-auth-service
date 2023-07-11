import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { User } from '../user/user.model'
import { IUSerLogin } from './auth.interface'

const loginUser = async (payload: IUSerLogin) => {
  const { id, password } = payload

  //check user exists
  // const isUserExists = await User.findOne(
  //   { id },
  //   { id: 1, password: 1, needsPasswordChange: 1 }
  // )

  //creating instance of user
  const user = new User()

  //access
  const isUserExists = user.isUserExists(id)

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not found')
  }

  //match password

  if (
    isUserExists?.password &&
    !user.isPasswordMatched(password, isUserExists?.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }

  // create access token
  return {}
}

export const AuthValiadationService = {
  loginUser,
}
