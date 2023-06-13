import express from 'express'

import { RequestValidation } from '../../middlewares/validateRequest'
import { UserController } from './user.controller'
import { createZodUserSchema } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  RequestValidation.ValidateRequest(createZodUserSchema),
  UserController.createUser
)

export const UserRoutes = {
  router,
}
