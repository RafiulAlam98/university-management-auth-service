import { ZodError, ZodIssue } from 'zod'
import { IGenericErrorMessage } from '../../interfaces/error'
export const handleZodError = (error: ZodError) => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    }
  })
  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  }
}
