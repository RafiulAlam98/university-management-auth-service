import httpStatus from 'http-status'
import { Schema, model } from 'mongoose'
import ApiError from '../../errors/ApiError'
import { IAcademicFaculty } from './academicFaculty.interface'

const academicFacultySchema = new Schema<IAcademicFaculty>({
  title: {
    type: String,
    required: true,
  },
})

academicFacultySchema.pre('save', async function (next) {
  const isExists = await AcademicFaculty.findOne({
    title: this.title,
  })
  if (isExists) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic Faculty is already exists',
      ''
    )
  }
  next()
})

export const AcademicFaculty = model<IAcademicFaculty>(
  'AcademicFaculty',
  academicFacultySchema
)
