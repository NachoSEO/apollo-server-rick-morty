const gql = require('graphql-tag');

module.exports = gql`
    input RegisterPayload {
      username: String!
      password: String!
      confirmPassword: String!
    }
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
    type User {
      id: ID!
      username: String!
      token: String!
    }
    type Query {
        characters: [Character],
        character(id: ID!): Character
    }
    type Mutation {
      login(username: String!, password: String!): User!
      register(payload: RegisterPayload): User!
      createCharacter(payload: CharacterPayload!): Character!
      deleteCharacter(id: ID!): String!
    }
`;
