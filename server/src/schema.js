const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query the tracks"
    tracksForHome: [Track!]!
  }

  "A track is a group of modules"
  type Track {
    id: ID!
    "the tracks title"
    title: String!
    "The tracks author"
    author: Author!
    "The image of the track "
    thumbnail: String
    "The tracks length in minutes (Approx)"
    length: Int
    "The number of tracks"
    modulesCount: Int
  }

  "Author of a track"
  type Author {
    id: ID!
    "Name of the author"
    name: String!
    "Photo of the author"
    photo: String
  }
`;

module.exports = typeDefs;
