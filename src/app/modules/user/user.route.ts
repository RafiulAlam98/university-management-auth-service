import express from 'express'
import { createZodUserSchema } from '../../middlewares/validateRequest'
import { UserController } from './user.controller'
import { RequestValidation } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  RequestValidation.ValidateRequest(createZodUserSchema),
  UserController.createUser
)

export const UserRoutes = {
  router,
}
