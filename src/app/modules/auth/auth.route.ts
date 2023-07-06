import { AuthValidation } from './auth.validation'
import { AuthValidationController } from './auth.controller'
import { RequestValidation } from './../../middlewares/validateRequest'
import express from 'express'

const router = express.Router()

router.post(
  '/login',
  RequestValidation.ValidateRequest(AuthValidation.loginZodSchema),
  AuthValidationController.loginUser
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
