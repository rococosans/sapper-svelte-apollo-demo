export default {
  Query: {
    async search(_, { name }, ctx, info) {
      const { Event, Product } = ctx
      const results = await Promise.all([
        Event.find({ name }),
        Product.find({ name }),
      ])

      const mergedResults = [].concat(...results)
      return mergedResults
    },
  },

  SearchResult: {
    __resolveType(searchResult) {
      switch (searchResult.type) {
        case 'CONFERENCE':
          return 'Conference'
        case 'FESTIVAL':
          return 'Festival'
        case 'CONCERT':
          return 'Concert'
        default:
          return 'Product'
      }
    },
  },
}
