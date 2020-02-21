const charactersResolvers = require('./characters');

module.exports = {
    Query: {
        ...charactersResolvers.Query
    },
    Mutation: {
        ...charactersResolvers.Mutation,
    }
  };