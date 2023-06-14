import {
  IAcademicSemesterCodes,
  IAcademicSemesterMonths,
  IAcademicSemseterTitles,
} from './academicSemester.interface'

export const academicSemesterTitles: IAcademicSemseterTitles[] = [
  'Autmn',
  'Summer',
  'Fall',
]

export const academicSemesterCodes: IAcademicSemesterCodes[] = [
  '01',
  '02',
  '03',
]

export const academicSemesterMonths: IAcademicSemesterMonths[] = [
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

export const academiceSemesterTitleCodeMapper: { [key: string]: string } = {
  Autmn: '01',
  Summer: '02',
  Fall: '03',
}
