import { ApolloServer } from 'apollo-server-express';
import resolvers from 'api/register-api.js';
import typeDefs from 'api/type-defs.js';
// Import Environmental Variables
import '../config/env';

export default function graphQLServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    context: req => ({ ...req }),
  });
}
