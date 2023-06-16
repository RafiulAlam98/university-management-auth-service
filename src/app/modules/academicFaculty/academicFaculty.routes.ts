import express from 'express'
import { AcademicFacultyRoutes } from './academicFaculty.controller'
const router = express.Router()

router.post('/create-faculty', AcademicFacultyRoutes.createFaculty)
router.get('/', AcademicFacultyRoutes.getAllFaculty)

export const FacultyRoutes = {
  router,
}
