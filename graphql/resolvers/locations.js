const Location = require('../../models/Location');

module.exports = {
  Query: {
    locations: async () => {
      try {
        const locations = await Location.find();

        return locations;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    createLocation: async (_, payload) => {
      const newLocation = new Location(payload);

      try {
        const location = await newLocation.save();
        return location;
      } catch (err) {
        throw new Error(err);
      }
    },
  }
}