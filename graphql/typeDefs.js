const gql = require('graphql-tag');

module.exports = gql`
    """
    Comments like that
    """
    type Character {
      id: ID!
      name: String!
      status: String!
      image: String!
      gender: String!
    }
    type Query {
        characters(
          name: String!,
          status: String!,
          gender: String!
        ): [Character]
    }
    type Mutation {
      createCharacter(
        name: String!,
        status: String!,
        gender: String!,
        image: String!
      ): Character!
      deleteCharacter(id: ID!): String!
    }
`;
