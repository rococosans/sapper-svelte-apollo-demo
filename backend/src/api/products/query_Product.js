export default {
  Query: {
    async products(_, args, { Product, User }, info) {
      const { skip, first, filter, orderBy } = args

      /* eslint-disable indent */
      const query = filter
        ? {
            $or: [{ name: filter }],
          }
        : {}

      const products = await Product.find(query)
        .skip(skip)
        .limit(first)
        .sort(orderBy)

      const items = []
      for await (const product of products) {
        product.user = await User.findById({ _id: product.user_id })
        items.push(product)
      }

      return items
    },

    async productsByUser(_, args, { Product, User }, info) {
      const { user_id, skip, first, orderBy } = args

      const products = await Product.find({ user_id })
        .skip(skip)
        .limit(first)
        .sort(orderBy)

      const items = []
      for await (const product of products) {
        product.user = await User.findById({ _id: user_id })
        items.push(product)
      }

      return items
    },

    async product(_, { _id }, { Product }, info) {
      const product = await Product.findById(_id)
      return product
    },
  },
}
