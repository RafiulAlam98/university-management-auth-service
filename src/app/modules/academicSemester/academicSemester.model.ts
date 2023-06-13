import { Schema, model } from 'mongoose'

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

import {
  AcademicSemesterModel,
  IAcademicSemeter,
} from './academicSemester.interface'

const academicSemesterSchema = new Schema<IAcademicSemeter>(
  {
    title: {
      type: String,
      required: true,
      enum: ['Autmn', 'Summer', 'Fall'],
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: ['01', '02', '03'],
    },
    startMonth: {
      type: String,
      required: true,
      enum: month,
    },
    endMonth: {
      type: String,
      required: true,
      enum: month,
    },
  },
  {
    timestamps: true,
  }
)

export const AcademicSemeter = model<IAcademicSemeter, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)
