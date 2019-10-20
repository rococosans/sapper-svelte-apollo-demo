import mongoose from 'mongoose'
import { events } from '../../data/events.json'
import { products } from '../../data/products.json'
import { users } from '../../data/users.json'

export default {
  Mutation: {
    async resetDb() {
      await mongoose.connection.dropDatabase()
      return 'Successfully reset database'
    },
    async seedDb(_, args, { Event, Product, User }, info) {
      const eventsCollection = await Event.find()
      const usersCollection = await User.find()
      const productsCollection = await Product.find()

      if (usersCollection && usersCollection.length === 0) {
        for (const user of users) {
          await User.create(user)
        }
      } else {
        console.log("The User collection is already populated or doesn't exist")
      }

      if (productsCollection && productsCollection.length === 0) {
        for (const product of products) {
          const users = await User.find()
          const { _id } = users[Math.floor(Math.random() * users.length)]

          await Product.create({ ...product, user_id: _id })
        }
      } else {
        console.log(
          "The Product collection is already populated or doesn't exist"
        )
      }

      if (eventsCollection && eventsCollection.length === 0) {
        for (const event of events) {
          const users = await User.find()
          const { _id } = users[Math.floor(Math.random() * users.length)]
          await Event.create({ ...event, user_id: _id })
        }
      } else {
        console.log(
          "The Event collection is already populated or doesn't exist"
        )
      }

      return 'Successfully seeded database'
    },
  },
}
