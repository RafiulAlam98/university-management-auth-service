import { IAcademicFaculty } from './academicFaculty.interface'
import { AcademicFaculty } from './academicFaculty.model'

const createFacultyService = async (
  payload: IAcademicFaculty
): Promise<IAcademicFaculty> => {
  const result = await AcademicFaculty.create(payload)
  return result
}

const getAllFacultyService = async (): Promise<IAcademicFaculty[]> => {
  const result = await AcademicFaculty.find()
  return result
}

const getSingleFacultyService = async (id: string) => {
  const result = await AcademicFaculty.findById(id)
  return result
}

const updateSingleFacultyService = async (
  id: string,
  payload: IAcademicFaculty
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

export const AcademicFacultyService = {
  createFacultyService,
  getAllFacultyService,
  getSingleFacultyService,
  updateSingleFacultyService,
}
