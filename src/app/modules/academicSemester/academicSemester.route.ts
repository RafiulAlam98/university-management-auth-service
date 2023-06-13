import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { AcademicSemesterValidation } from './academicSemeter.validation'

const router = express.Router()

router.post(
  '/create-user',
  RequestValidation.ValidateRequest(
    AcademicSemesterValidation.createAcademicSemeterZodSchema
  )
)

export const UserRoutes = {
  router,
}
