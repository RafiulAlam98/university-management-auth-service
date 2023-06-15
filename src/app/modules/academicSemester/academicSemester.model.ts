import httpStatus from 'http-status'
import { Schema, model } from 'mongoose'
import ApiError from '../../errors/ApiError'
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constant'
import {
  AcademicSemesterModel,
  IAcademicSemeter,
} from './academicSemester.interface'

const academicSemesterSchema = new Schema<IAcademicSemeter>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
  },
  {
    timestamps: true,
  }
)

academicSemesterSchema.pre('save', async function (next) {
  const isExists = await AcademicSemeter.findOne({
    title: this.title,
    year: this.year,
  })
  if (isExists) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic Semester is already exists',
      ''
    )
  }
  next()
})

export const AcademicSemeter = model<IAcademicSemeter, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)

//same year same title conflict issue
