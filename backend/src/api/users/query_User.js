export default {
  Query: {
    async users(_, args, { User }, info) {
      const user = await User.find()
      return user
    },
    async user(_, { _id }, { User }, info) {
      const user = await User.findById(_id)
      return user
    },
    async currentUser(_, args, { req, User }, info) {
      if (!req.userId) {
        return null
      }

      const user = await User.findById({ _id: req.userId })
      return user
    },
  },
}
