import path from 'path'
import fs from 'fs'

const loadGQLFile = type => {
  const filePath = path.join(__dirname, './', type)
  return fs.readFileSync(filePath, 'utf-8')
}

const typeDefs = [
  loadGQLFile('base/schema_Base.graphql'),
  loadGQLFile('products/schema_Product.graphql'),
  loadGQLFile('users/schema_User.graphql'),
  loadGQLFile('events/schema_Event.graphql'),
  loadGQLFile('search/schema_Search.graphql'),
]

export default typeDefs
