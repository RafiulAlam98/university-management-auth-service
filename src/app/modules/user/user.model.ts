import { IUser, UserModel } from './user.interface'
import { Schema, model } from 'mongoose'

import bcrypt from "bcrypt"
import config from '../../../config'

const UserSchema = new Schema<IUser>(
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

UserSchema.pre("save",async function(){
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  //bcrypt password
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  ) 
})


export const User = model<IUser, UserModel>('User', UserSchema)
