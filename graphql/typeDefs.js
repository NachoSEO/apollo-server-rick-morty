const gql = require('graphql-tag');

module.exports = gql`
    """
    Types
    """
    type Character {
      id: ID!
      name: String!
      status: String!
      image: String!
      gender: String!
      location: Location
    }
    type Location {
      id: ID!
      name: String!
    }
    type Query {
      """
      Get the list of all characters
      """
      characters(name: String, status: String, gender: String): [Character]
      """
      Get the list of all locations
      """
      locations: [Location]!
      """
      Get a location by Id
      """
      location(id: ID!): Location
    }
    type Mutation {
      """
      Create new location
      """
      createLocation(name: String!): Location!
      """
      Create new character
      """
      createCharacter(name: String!, status: String!, gender: String!, image: String!): Character!
      """
      Delete a character
      """
      deleteCharacter(id: ID!): String!
    }
`;
