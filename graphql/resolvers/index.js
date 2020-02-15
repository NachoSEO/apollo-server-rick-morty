const usersResolvers = require('./users');
const charactersResolvers = require('./characters');

module.exports = {
    Query: {
        ...charactersResolvers.Query
    }
  };