class ApiError extends Error {
  statusCode: number

  constructor(statuscode: number, message: string, stack = '') {
    super(message)
    this.statusCode = statuscode

    if (stack) {
      this.stack = stack
      this.statusCode = statuscode
      this.message = message
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export default ApiError
