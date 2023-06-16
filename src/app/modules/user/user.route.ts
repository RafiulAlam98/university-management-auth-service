import express from 'express'

import { RequestValidation } from '../../middlewares/validateRequest'
import { UserController } from './user.controller'
import { StudentValidaion } from './user.validation'

const router = express.Router()

router.post(
  '/create-student',
  RequestValidation.ValidateRequest(StudentValidaion.createUserZodSchema),
  UserController.createStudent
)

export const UserRoutes = {
  router,
}
