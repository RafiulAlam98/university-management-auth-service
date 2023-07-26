import { Request, Response } from 'express'

import httpStatus from 'http-status'
import config from '../../../config'
import sendResponse from '../../../shared/sendResponse'
import { catchAsync } from './../../../shared/catchAsync'
import { IRefreshTokenResponse } from './auth.interface'
import { AuthValiadationService } from './auth.service'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body
  const result = await AuthValiadationService.loginUser(loginData)
  //best practise
  const { refreshToken, ...others } = result

  //set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  }
  res.cookie('refreshToken', refreshToken, cookieOptions)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'loginData Logged in successfully',
    data: others,
  })
})

const refreshTokenController = catchAsync(
  async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies

    const result = await AuthValiadationService.refreshTokenService(
      refreshToken
    )

    sendResponse<IRefreshTokenResponse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Logged in successfully',
      data: result,
    })
  }
)

export const AuthValidationController = {
  loginUser,
  refreshTokenController,
}
