const Mutations = {
  Mutation: {
    async testMutation(parent, args, ctx, info) {
      const msg = "Mutation test!"
      return msg
    }
  }
};

export default Mutations;
