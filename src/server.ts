import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorlogger, logger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('database connected')
    app.listen(config.port, () => {
      logger.info(`listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('Failed to conncet', err)
  }
}

main()
