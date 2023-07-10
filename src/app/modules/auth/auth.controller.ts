import { Request, Response } from 'express'

import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { catchAsync } from './../../../shared/catchAsync'
import { AuthValiadationService } from './auth.service'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...user } = req.body
  const result = await AuthValiadationService.loginUser(user)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Logged in successfully',
    data: result,
  })
})

export const AuthValidationController = {
  loginUser,
}
