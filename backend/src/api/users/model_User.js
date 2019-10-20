import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    permissions: {
      type: [String],
      enum: ['ADMIN', 'USER'],
      default: ['USER'],
    },
  },
  { timestamps: true }
)

export const User = mongoose.model('user', UserSchema)
