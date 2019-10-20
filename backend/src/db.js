import mongoose from 'mongoose'
import { dbError } from './errors'

export default function db() {
  const dbUri = process.env.DATABASE_URI
  mongoose.Promise = global.Promise
  mongoose
    .connect(dbUri, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log(`MongoDB connected on: ${dbUri}`))
    .catch(err => dbError(err))
}
