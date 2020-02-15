const gql = require('graphql-tag');

module.exports = gql`
    input RegisterPayload {
      username: String!
      password: String!
      confirmPassword: String!
    }
    type Character {
      id: ID!
      name: String!
      status: String!
    }
    type User {
      id: ID!
      username: String!
      token: String!
    }
    type Query {
        getCharacters: [Character] 
    }
    type Mutation {
      login(username: String!, password: String!): User!
      register(payload: RegisterPayload): User!
    }
`;
