import express from 'express'
import { createZodUserSchema } from '../../middlewares/handleZodValidation'
import { RequestValidation } from '../user.validation'
import { UserController } from './user.controller'

const router = express.Router()

router.post(
  '/create-user',
  RequestValidation.ValidateRequest(createZodUserSchema),
  UserController.createUser
)

export const UserRoutes = {
  router,
}
