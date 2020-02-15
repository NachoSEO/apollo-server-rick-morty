const gql = require('graphql-tag');

module.exports = gql`
    type Character {
      id: ID!
      name: String!
      status: String!
    }
    type Query {
        getCharacters: [Character] 
    }
`;
