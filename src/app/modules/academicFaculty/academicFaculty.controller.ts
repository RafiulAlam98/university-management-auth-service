import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { AcademicFacultyService } from './academicFaculty.service'

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const { ...academicFacultyData } = req.body
  const result = await AcademicFacultyService.createFacultyService(
    academicFacultyData
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is created successfully!',
    data: result,
  })
})

const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.getAllFacultyService()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is retrieved successfully!',
    data: result,
  })
})

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await AcademicFacultyService.getSingleFacultyService(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is retrieved successfully!',
    data: result,
  })
})

const updateSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const data = req.body
  const result = await AcademicFacultyService.updateSingleFacultyService(
    id,
    data
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is updated successfully!',
    data: result,
  })
})

export const AcademicFacultyRoutes = {
  createFaculty,
  getAllFaculty,
  getSingleFaculty,
  updateSingleFaculty,
}
