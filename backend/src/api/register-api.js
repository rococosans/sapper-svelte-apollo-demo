import { merge } from 'lodash'

// Import Mutation
import BaseMutation from './base/mutation_Base'
import EventMutation from './events/mutation_Event'
import ProductMutation from './products/mutation_Product'
import UserMutation from './users/mutation_User'

// Import Query
import BaseQuery from './base/query_Base'
import EventQuery from './events/query_Event'
import ProductQuery from './products/query_Product'
import SearchQuery from './search/query_Search'

// Merge Mutation
const mutations = merge(
  BaseMutation,
  EventMutation,
  ProductMutation,
  UserMutation
)

// Merge Query
const queries = merge(BaseQuery, EventQuery, ProductQuery, SearchQuery)

// Merge Resolvers
const resolvers = merge(queries, mutations)

export default resolvers
