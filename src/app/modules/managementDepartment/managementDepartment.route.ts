import { ManagementDepartmentController } from './managementDepartment.controller'
import { ManagementDepartmentValidation } from './managementDepartment.validation'
import { RequestValidation } from './../../middlewares/validateRequest';
import express from "express"

const router = express.Router()

router.post(
  '/create-department',
  RequestValidation.ValidateRequest(
    ManagementDepartmentValidation.createManagementDepartmentZodSchema
  ),
  ManagementDepartmentController.createDepartment
)

router.get('/:id', ManagementDepartmentController.getSingleDepartment)

router.patch(
  '/:id',
  RequestValidation.ValidateRequest(
    ManagementDepartmentValidation.updateManagementDepartmentZodSchema
  ),
  ManagementDepartmentController.updateDepartment
)

router.delete('/:id', ManagementDepartmentController.deleteDepartment)

router.get('/', ManagementDepartmentController.getAllDepartments)

export const ManagementDepartmentRoutes = {router}
