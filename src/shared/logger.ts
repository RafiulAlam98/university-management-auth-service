/* eslint-disable no-undef */
import path from 'path'
import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf, prettyPrint } = format

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${date} ${hour}:${minutes}:${seconds} [${label}] ${level}: ${message}`
})

export const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'HI' }), timestamp(), myFormat, prettyPrint()),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
})
export const errorlogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'HI' }), timestamp(), myFormat, prettyPrint()),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})
