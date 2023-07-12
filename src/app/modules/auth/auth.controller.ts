import { Request, Response } from 'express'

import httpStatus from 'http-status'
import config from '../../../config'
import sendResponse from '../../../shared/sendResponse'
import { catchAsync } from './../../../shared/catchAsync'
import { AuthValiadationService } from './auth.service'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...user } = req.body
  const result = await AuthValiadationService.loginUser(user)

  //best practise
  const { refreshToken, ...others } = result

  //set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  }
  res.cookie('refresh-token', refreshToken, cookieOptions)

  // delete result.refreshToken // XXX
  // if ("refreshToken" in result) {
  //   delete result.refreshToken
  // }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Logged in successfully',
    data: others,
  })
})

export const AuthValidationController = {
  loginUser,
}
