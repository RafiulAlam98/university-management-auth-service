import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorlogger, logger } from './shared/logger'

async function main() {
  let server: Server
  try {
    await mongoose.connect(config.database_url as string)
    // logger.info('database connected')
    app.listen(config.port, () => {
      logger.info(`listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('Failed to conncet', err)
  }
  process.on('unhandledRejection', error => {
    console.log('Unhandled rejectio, We are closing our server')
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
