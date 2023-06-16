import express from 'express'
import { FacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes'
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import { UserRoutes } from '../modules/user/user.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users/',
    route: UserRoutes.router,
  },
  {
    path: '/academic-semesters/',
    route: SemesterRoutes.router,
  },
  {
    path: '/academic-faculty/',
    route: FacultyRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
