import { RequestHandler } from 'express'
import { z } from 'zod'
import { UserService } from './user.service'

const createUser: RequestHandler = async (req, res, next) => {
  const createZodUserSchema = z.object({
    body: z.object({
      role: z.string({
        required_error: 'role is required',
      }),
      password: z.string().optional(),
    }),
  })

  await createZodUserSchema.parseAsync(req)
  try {
    const { user } = req.body
    const result = await UserService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    })
  } catch (error) {
    next()
  }
}
export const UserController = {
  createUser,
}
