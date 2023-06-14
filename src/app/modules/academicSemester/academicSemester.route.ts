import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { AcademicSemesterValidation } from './academicSemeter.validation'
import { AcademicSemesterController } from './academicSemster.controller'

const router = express.Router()

router.post(
  '/create-semester',
  RequestValidation.ValidateRequest(
    AcademicSemesterValidation.createAcademicSemeterZodSchema
  ),
  AcademicSemesterController.createSemester
)

router.get('/', AcademicSemesterController.getAllSemesters)
export const SemesterRoutes = {
  router,
}
