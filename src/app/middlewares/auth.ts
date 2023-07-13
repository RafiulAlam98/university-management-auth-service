import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import { Secret } from 'jsonwebtoken'
import config from '../../config'
import { jwtHelpers } from '../../helpers/jwtHelpers'
import ApiError from '../errors/ApiError'

export const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get Authorization token
      const token = req.headers.authorization
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized')
      }

      //verify token
      let verifiedUser = null
      verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret)
      if (!verifiedUser) {
        throw new ApiError(httpStatus.FORBIDDEN, '')
      }
      req.user = verifiedUser // role, userId

      //guard  by role
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden ')
      }
      next()
    } catch (error) {
      next()
    }
  }
