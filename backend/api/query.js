import uuid from 'uuid/v4'

const Query = {
  Query: {
    async testQuery(parent, args, ctx, info) {
      const msg = 'Query test!'
      return msg
    },
    async menuItems(parent, args, ctx, info) {
      const menuItems = []

      const menuItem = {
        typename: 'menuItem',
        id: uuid(),
        name: 'Burger',
        price: '1050',
        image: '',
        description: 'Tasty burger!',
      }

      await menuItems.push(menuItem)

      return menuItems
    },
  },
}

export default Query
