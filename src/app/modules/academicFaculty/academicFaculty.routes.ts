import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { auth } from '../../middlewares/auth'
import { RequestValidation } from '../../middlewares/validateRequest'
import { AcademicFacultyRoutes } from './academicFaculty.controller'
import { AcademicFacultyValidation } from './academicFaculty.validation'
const router = express.Router()

//create faculty
router.post(
  '/create-faculty',
  RequestValidation.ValidateRequest(
    AcademicFacultyValidation.createFacultyZodSchema
  ),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicFacultyRoutes.createFaculty
)

// get single faculty
router.get('/:id', AcademicFacultyRoutes.getSingleFaculty)

//update single faculty
router.patch(
  '/:id',
  RequestValidation.ValidateRequest(
    AcademicFacultyValidation.updateFacultyZodSchema
  ),
  AcademicFacultyRoutes.updateSingleFaculty
)

//delte faculty
router.delete('/:id', AcademicFacultyRoutes.deleteSingleFaculty)

//get all faculty
router.get('/', AcademicFacultyRoutes.getAllFaculty)

export const FacultyRoutes = {
  router,
}
