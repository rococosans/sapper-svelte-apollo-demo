const Query = {
  Query: {
    async testQuery(parent, args, ctx, info) {
      const msg = "Query test!"
      return msg
    }
  }
};

export default Query;
