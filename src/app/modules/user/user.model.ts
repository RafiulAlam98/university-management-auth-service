import { Schema, model } from 'mongoose'
import { IUser, IUserMethods, UserModel } from './user.interface'

import bcrypt from 'bcrypt'
import config from '../../../config'

const UserSchema = new Schema<IUser, Record<string, never>, IUserMethods>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

UserSchema.methods.isUserExists = async function (
  id: string
): Promise<Partial<IUser | null>> {
  const user = await User.findOne(
    { id },
    { id: 1, password: 1, needsPasswordChange: 1 }
  )
  return user
}

UserSchema.methods.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword)
}

UserSchema.pre('save', async function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  //bcrypt password
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  )
})

export const User = model<IUser, UserModel>('User', UserSchema)
