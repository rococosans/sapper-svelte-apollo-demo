export default {
  Mutation: {
    async createEvent(_, { input }, { Event }) {
      const event = await Event.create(input)
      return event
    },
  },
  Event: {
    __resolveType(event) {
      switch (event.type) {
        case 'CONFERENCE':
          return 'Conference'
        case 'FESTIVAL':
          return 'Festival'
        case 'CONCERT':
          return 'Concert'
      }
    },
  },
}
