import { AdminValidation } from './../admin/admin.validation';
import { FacultyValidation } from './../faculty/faculty.validations';
import { RequestValidation } from '../../middlewares/validateRequest'
import { StudentValidaion } from './user.validation'
import { UserController } from './user.controller'
import express from 'express'

const router = express.Router()

router.post(
  '/create-student',
  RequestValidation.ValidateRequest(StudentValidaion.createUserZodSchema),
  UserController.createStudent
)
router.post(
  '/create-faculty',
  RequestValidation.ValidateRequest(FacultyValidation.updateFacultyZodSchema),
  UserController.createFaculty
)
router.post(
  '/create-admin',
  RequestValidation.ValidateRequest(AdminValidation.updateAdmin),
  UserController.createAdmin
)

export const UserRoutes = {
  router,
}
