import { AcademicSemeter } from '../academicSemester/academicSemester.model'
import ApiError from '../../errors/ApiError'
import { IStudent } from '../student/student.interface'
import { IUser } from './user.interface'
import { Student } from '../student/student.model'
import { User } from './user.model'
import config from '../../../config'
import { generateStudentId } from './user.utils'
import httpStatus from 'http-status'
import mongoose from 'mongoose'

const createStudentService = async (
  user: IUser,
  student: IStudent
): Promise<IUser | null> => {
  // auto generated incremental id

  //default password
  if (!user.password) {
    user.password = config.default_student_pass as string
  }

  //set role
  user.role = 'student'
  const academicSemester = await AcademicSemeter.findById(
    student.academicSemester
  )

  let newUserAllData
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const id = await generateStudentId(academicSemester)
    user.id = id
    student.id = id;

    // create student
    const newStudent = await Student.create([student], { session })
    if (!newStudent.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create')
      
    }
    console.log(newStudent)
    //set student id to user.student
    user.student = newStudent[0]._id
    const newUser = await User.create([user], { session })
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create')
     }

    newUserAllData = newUser[0]
    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
  if (newUserAllData) {
    newUserAllData = await User.findOne({ _id: newUserAllData.id }).populate({
      path: 'student',
      populate: [
        {
          path: 'academicSemester',
        },
        // {
        //   path: 'academicDepartment',
        // },
        {
          path: 'academicFaculty',
        },
      ],
    })
  }
  return newUserAllData
}

export const UserService = {
  createStudentService,
}
