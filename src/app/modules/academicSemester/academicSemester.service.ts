import { IAcademicSemeter } from './academicSemester.interface'
import { AcademicSemeter } from './academicSemester.model'

const createSemester = async (
  payload: IAcademicSemeter
): Promise<IAcademicSemeter> => {
  const result = await AcademicSemeter.create(payload)
  return result
}

export const AcademicSemesterService = {
  createSemester,
}
