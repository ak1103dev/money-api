const { gql } = require('apollo-server');

// // Type definitions define the "shape" of your data and specify
// // which ways the data can be fetched from the GraphQL server.
// const typeDefs = gql`
//   # Comments in GraphQL are defined with the hash (#) symbol.

//   # This "Book" type can be used in other type declarations.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is the root of all GraphQL queries.
//   # (A "Mutation" type will be covered later on.)
//   type Query {
//     books: [Book]
//   }
// `;

// module.exports = typeDefs;

const typeDefs = gql`
  type Query {
    author(firstName: String, lastName: String): Author
    allAuthors: [Author]
    getFortuneCookie: String # we'll use this later
  }
  type Author {
    id: Int
    firstName: String
    lastName: String
    posts: [Post]
  }
  type Post {
    id: Int
    title: String
    text: String
    views: Int
    author: Author
  }
`;

module.exports = typeDefs;
