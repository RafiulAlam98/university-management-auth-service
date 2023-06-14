import httpStatus from 'http-status'
import { SortOrder } from 'mongoose'
import { paginationHelper } from '../../../helpers/paginationHelpers'
import { IGenericResponse } from '../../../interfaces/common'
import { IPaginationOptions } from '../../../interfaces/pagination'
import ApiError from '../../errors/ApiError'
import { academiceSemesterTitleCodeMapper } from './academicSemester.constant'
import { IAcademicSemeter } from './academicSemester.interface'
import { AcademicSemeter } from './academicSemester.model'

const createSemester = async (
  payload: IAcademicSemeter
): Promise<IAcademicSemeter> => {
  if (academiceSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code')
  }
  const result = await AcademicSemeter.create(payload)
  return result
}

const getAllSemesters = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicSemeter[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.paginationFormat(paginationOptions)

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }

  const result = await AcademicSemeter.find().sort().skip(skip).limit(limit)
  const total = await AcademicSemeter.countDocuments()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

export const AcademicSemesterService = {
  createSemester,
  getAllSemesters,
}
