import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './user.service'

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
export const UserController = {
  createStudent,
}
