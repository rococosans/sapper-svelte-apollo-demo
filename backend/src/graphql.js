import { ApolloServer } from 'apollo-server-express'
import resolvers from './api/register-api'
import typeDefs from './api/typeDefs'
import Models from './api/models'

export default function graphql() {
  const graphQLServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: req => ({ ...req, ...Models }),
  })
  return graphQLServer
}
