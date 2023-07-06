import { FacultyController } from './faculty.controller'
import { FacultyValidation } from './faculty.validations'
import { RequestValidation } from './../../middlewares/validateRequest'
import express from 'express'

const router = express.Router()

router.get('/:id', FacultyController.getSingleFaculty)
router.get('/', FacultyController.getAllFaculties)

router.patch(
  '/:id',
  RequestValidation.ValidateRequest(FacultyValidation.updateFacultyZodSchema),
  FacultyController.updateFaculty
)

router.delete('/:id', FacultyController.deleteFaculty)

export const FacultyRoutes = {router}
