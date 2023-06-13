import { Model } from 'mongoose'

export type IAcademicSemeter = {
  title: string
  year: number
  code: string
  startMonth: string
  endMonth: string
}

export type AcademicSemesterModel = Model<IAcademicSemeter>
