const charactersResolvers = require('./characters');
const locationsResolvers = require('./locations');

module.exports = {
    Query: {
        ...charactersResolvers.Query,
        ...locationsResolvers.Query,
    },
    Mutation: {
        ...charactersResolvers.Mutation,
        ...locationsResolvers.Mutation,
    }
  };