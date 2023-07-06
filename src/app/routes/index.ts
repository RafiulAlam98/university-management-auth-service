import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes'
import { AdminRoutes } from '../modules/admin/admin.route'
import { AuthValidationroutes } from './../modules/auth/auth.route';
import { FacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes'
import { ManagementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route'
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import { StudentRoutes } from '../modules/student/student.route'
import { UserRoutes } from '../modules/user/user.route'
import express from 'express'

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
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes.router,
  },
  {
    path: '/management-departments',
    route: ManagementDepartmentRoutes.router,
  },
  {
    path: '/students',
    route: StudentRoutes.router,
  },
  {
    path: '/faculties',
    route: FacultyRoutes.router,
  },
  {
    path: '/admins',
    route: AdminRoutes.router,
  },
  {
    path: '/auth',
    route: AuthValidationroutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
