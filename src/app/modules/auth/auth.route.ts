import express from 'express'
import { RequestValidation } from './../../middlewares/validateRequest'
import { AuthValidationController } from './auth.controller'
import { AuthValidation } from './auth.validation'

const router = express.Router()

router.post(
  '/login',
  RequestValidation.ValidateRequest(AuthValidation.loginZodSchema),
  AuthValidationController.loginUser
)
router.post(
  '/refresh-token',
  // RequestValidation.ValidateRequest(AuthValidation.refreshTokenZodSchema),
  AuthValidationController.refreshTokenController
)

// router.get('/:id', ManagementDepartmentController.getSingleDepartment)

// router.patch(
//   '/:id',
//   RequestValidation.ValidateRequest(
//     ManagementDepartmentValidation.updateManagementDepartmentZodSchema
//   ),
//   ManagementDepartmentController.updateDepartment
// )

// router.delete('/:id', ManagementDepartmentController.deleteDepartment)

// router.get('/', ManagementDepartmentController.getAllDepartments)

export const AuthValidationroutes = { router }
