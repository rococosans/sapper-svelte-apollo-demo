export default {
  Query: {
    async eventsByVenue(_, { venue }, { Event }, info) {
      const event = await Event.find({ venue })
      return event
    },
  },
}
