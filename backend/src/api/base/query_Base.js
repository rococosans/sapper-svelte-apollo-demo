export default {
  Query: {
    async hello(_, args, ctx, info) {
      return 'Hello World!'
    },
  },
}
