import { type ObjectId } from 'mongoose'
import { db } from '../common/db.js'

export interface User {
  username: string
  hash: string
  userId: ObjectId
}

export const UserSchema = new db.Schema<User>({
  hash: {type: String, required: true},
  username: {type: String, required: true},
  userId: {type: db.Types.ObjectId, _id: true, required: false, auto: true},
})

export const userModel = db.model<User>('User', UserSchema)
