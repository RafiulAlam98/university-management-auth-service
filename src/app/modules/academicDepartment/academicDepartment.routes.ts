import { AcademicDepartmentController } from './academicDepartment.controller'
import { AcademicDepartmentValidation } from './academicDepartment.validations'
import { RequestValidation } from './../../middlewares/validateRequest'
import express from 'express'

const router = express.Router()

router.post(
  '/create-department',
  RequestValidation.ValidateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema
  ),
  AcademicDepartmentController.createDepartment
)

router.get('/:id', AcademicDepartmentController.getSingleDepartment)

router.patch(
  '/:id',
  RequestValidation.ValidateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentZodSchema
  ),
  AcademicDepartmentController.updateDepartment
)

router.delete('/:id', AcademicDepartmentController.deleteDepartment)

router.get('/', AcademicDepartmentController.getAllDepartments)

export const AcademicDepartmentRoutes = {router}
