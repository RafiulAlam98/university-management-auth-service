import { NextFunction, Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { AcademicSemesterService } from './academicSemester.service'

import { paginationField } from '../../../constants/paginationField'
import pick from '../../../shared/pick'
import { academicSemesterFilterableField } from './academicSemester.constant'

const createSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is created successfully!',
      data: result,
    })
    next()
  }
)

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, academicSemesterFilterableField)
    const paginationOptions = pick(req.query, paginationField)
    // console.log(paginationOptions)
    const result = await AcademicSemesterService.getAllSemesters(
      paginationOptions,
      filters
    )
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester retrieved successfully!',
      data: result,
    })
    next()
  }
)
export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
}
