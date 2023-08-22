import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'

let server: Server

process.on('uncaughtException', err => {
  console.log(err)
  process.exit(1)
})

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('database connected')
    app.listen(config.port, () => {
      console.log(`listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to conncet', err)
  }
  process.on('unhandledRejection', error => {
    console.log('Unhandled rejection, We are closing our server')
    if (server) {
      server.close(() => {
        console.log(error)
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
