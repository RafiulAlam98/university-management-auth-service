import express from 'express'
import { AcademicFacultyRoutes } from './academicFaculty.controller'
const router = express.Router()

//create faculty
router.post('/create-faculty', AcademicFacultyRoutes.createFaculty)

// get single faculty
router.get('/:id', AcademicFacultyRoutes.getSingleFaculty)

//update single faculty
router.patch('/:id', AcademicFacultyRoutes.updateSingleFaculty)

//delte faculty
router.delete('/:id', AcademicFacultyRoutes.deleteSingleFaculty)

//get all faculty
router.get('/', AcademicFacultyRoutes.getAllFaculty)

export const FacultyRoutes = {
  router,
}
