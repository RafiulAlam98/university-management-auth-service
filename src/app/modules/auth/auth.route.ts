import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { AuthValidationController } from './auth.controller'
import { AuthValidation } from './auth.validation'

const router = express.Router()

router.post(
  '/login',
  RequestValidation.ValidateRequest(AuthValidation.loginZodSchema),
  AuthValidationController.loginUser
)
