import httpStatus from 'http-status'
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

export const AcademicSemesterService = {
  createSemester,
}
