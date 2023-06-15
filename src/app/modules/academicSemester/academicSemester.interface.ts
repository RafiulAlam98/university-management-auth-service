import { Model } from 'mongoose'
export type IAcademicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type IAcademicSemseterTitles = 'Autmn' | 'Summer' | 'Fall'

export type IAcademicSemesterCodes = '01' | '02' | '03'

export type IAcademicSemeter = {
  title: IAcademicSemseterTitles
  year: string
  code: IAcademicSemesterCodes
  startMonth: IAcademicSemesterMonths
  endMonth: IAcademicSemesterMonths
}

export type AcademicSemesterModel = Model<IAcademicSemeter>

export type IAcademicSemesterFilter = { searchTerm: string }
