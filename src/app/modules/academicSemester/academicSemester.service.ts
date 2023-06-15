import httpStatus from 'http-status'
import { SortOrder } from 'mongoose'
import { paginationHelper } from '../../../helpers/paginationHelpers'
import { IGenericResponse } from '../../../interfaces/common'
import { IPaginationOptions } from '../../../interfaces/pagination'
import ApiError from '../../errors/ApiError'
import {
  academicSemeterSearchField,
  academiceSemesterTitleCodeMapper,
} from './academicSemester.constant'
import {
  IAcademicSemester,
  IAcademicSemesterFilter,
} from './academicSemester.interface'
import { AcademicSemeter } from './academicSemester.model'

//create semester
const createSemesterService = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academiceSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code')
  }
  const result = await AcademicSemeter.create(payload)
  return result
}

//get all semesters
const getAllSemestersService = async (
  paginationOptions: IPaginationOptions,
  filters: IAcademicSemesterFilter
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const andConditions = []
  const { searchTerm, ...filtersData } = filters

  if (searchTerm) {
    andConditions.push({
      $or: academicSemeterSearchField.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  // const andConditions = [
  //   {
  //     $or: [
  //       {
  //         code: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //       {
  //         title: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //       {
  //         year: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //     ],
  //   },
  // ]

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.paginationFormat(paginationOptions)

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await AcademicSemeter.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
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

// get single semester
const getSingleSemesterService = async (id: string) => {
  const result = await AcademicSemeter.findById(id)
  return result
}

//  update semester
const updateSingleSemesterService = async (
  id: string,
  payload: IAcademicSemester
): Promise<IAcademicSemester | null> => {
  if (academiceSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code')
  }
  const result = await AcademicSemeter.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

// delete semester
const deleteSingleSemesterService = async (
  id: string
): Promise<IAcademicSemester | null> => {
  const result = await AcademicSemeter.findByIdAndDelete(id)
  return result
}

export const AcademicSemesterService = {
  createSemesterService,
  getAllSemestersService,
  getSingleSemesterService,
  updateSingleSemesterService,
  deleteSingleSemesterService,
}
