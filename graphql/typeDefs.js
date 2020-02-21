const gql = require('graphql-tag');

module.exports = gql`
    input CharacterPayload {
      name: String!
      status: String!
      image: String!
      gender: String!
    }
    type Character {
      id: ID!
      name: String!
      status: String!
      image: String!
      gender: String!
    }
    type Query {
        characters(name: String!): [Character],
        character(id: ID!): Character
    }
    type Mutation {
      createCharacter(payload: CharacterPayload!): Character!
      updateCharacter(id: ID!, payload: CharacterPayload): Character!
      deleteCharacter(id: ID!): String!
    }
`;
