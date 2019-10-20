export default {
  Mutation: {
    async registerUser(_, { input }, { res, User }, info) {
      input.email = input.email.toLowerCase().trim()
      const password = input.password

      const isUser = await User.findOne({ email: input.email })
      if (isUser) throw new Error('That user already exists.')

      const user = await User.create({
        ...input,
        password,
      })

      const token = { userId: user._id }

      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 31536000000,
      })

      return user
    },
    async signIn(_, { input }, { req, res, User }, info) {
      if (req.userId) throw new Error('There is already someone signed in.')

      const user = await User.findOne({ email: input.email })
      if (!user) throw new Error(`No user found for ${input.email}.`)

      if (input.password !== user.password) {
        throw new Error("Password doesn't match.")
      }

      const token = { userId: user._id }

      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 31536000000,
      })

      return user
    },
    async signOut(_, args, ctx, info) {
      return 'You have been signed out!'
    },
    async updateUser(_, { _id, input }, { User }, info) {
      const user = await User.findOneAndUpdate(
        { email: input.email },
        {
          ...input,
        }
      )

      return user
    },
    async deleteUser(_, { _id }, { User }, info) {
      const user = await User.findByIdAndRemove(_id)
      return user
    },
  },
}
