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
    const result = await AcademicSemesterService.createSemesterService(
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

    const result = await AcademicSemesterService.getAllSemestersService(
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

const getSingleSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const result = await AcademicSemesterService.getSingleSemesterService(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester retrieved successfully!',
      data: result,
    })
    next()
  }
)
const updateSingleSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const data = req.body
    const result = await AcademicSemesterService.updateSingleSemesterService(
      id,
      data
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
  getSingleSemester,
  updateSingleSemester,
}
