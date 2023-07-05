import { Request, RequestHandler, Response } from 'express'

import { IUser } from './user.interface'
import { UserService } from './user.service'
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'

const createStudent: RequestHandler = catchAsync(async (req, res) => {
  const { student, ...user } = req.body
  const result = await UserService.createStudentService(user, student)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully!',
    data: result,
  })
})


const createFaculty: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { faculty, ...userData } = req.body
    const result = await UserService.createFaculty(faculty, userData)

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  }
)

const createAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { admin, ...userData } = req.body
    const result = await UserService.createAdmin(admin, userData)

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admin created successfully!',
      data: result,
    })
  }
)

export const UserController = {
  createStudent,
  createFaculty,
  createAdmin,
}
