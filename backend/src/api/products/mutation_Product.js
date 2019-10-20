export default {
  Mutation: {
    async createProduct(_, { input }, { Product, User }, info) {
      const { user_id } = input
      const user = await User.findById({ _id: user_id })
      const product = await Product.create({
        ...input,
        user_id,
      })
      return { ...product._doc, user }
    },

    async updateProduct(_, { _id, input }, { Product }, info) {
      const product = await Product.findOneAndUpdate({ _id }, input, {
        new: true,
      })
      return product
    },

    async deleteProduct(_, { _id }, { Product }, info) {
      const product = await Product.findByIdAndRemove(_id)
      return product
    },
  },
}
