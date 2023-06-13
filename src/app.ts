import cors from 'cors'
import express, { Application } from 'express'
import { globalErrorHandler } from './app/middlewares/globalErrorHandler'
import { SemesterRoutes } from './app/modules/academicSemester/academicSemester.route'
import { UserRoutes } from './app/modules/user/user.route'

const app: Application = express()

//cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Route
app.use('/api/v1/users/', UserRoutes.router)
app.use('/api/v1/academic-semesters/', SemesterRoutes.router)

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(100, 'hi', '')
//   //   next()
// })

app.use(globalErrorHandler)

export default app
