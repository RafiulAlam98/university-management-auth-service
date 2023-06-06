import cors from 'cors'
import express, { Application } from 'express'
import { globalErrorHandler } from './app/middlewares/globalErrorHandler'
import userRouter from './app/modules/user/user.route'
const app: Application = express()

//cors
app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Route
app.use('/api/v1/users/', userRouter)

//Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'Ore baba Error!', 'hello')
//   // next('HI Error')
// })

app.use(globalErrorHandler)

export default app
