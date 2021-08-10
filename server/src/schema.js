const { gql } = require("apollo-server");

const typeDefs = gql`
  #schema definitions go here
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    moduleCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    tracksForHome: [Track!]!
  }
`;

module.exports = typeDefs;
