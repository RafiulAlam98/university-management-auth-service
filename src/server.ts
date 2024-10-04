import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorlogger, logger } from './shared/logger'

let server: Server

process.on('uncaughtException', err => {
  errorlogger.error(err)
  process.exit(1)
})

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('database connected')
    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('Failed to conncet', err)
  }
  process.on('unhandledRejection', error => {
    errorlogger.error('Unhandled rejection, We are closing our server')
    if (server) {
      server.close(() => {
        errorlogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

main()

process.on('SIGTERM', () => {
  if (server) {
    server.close()
  }
})
