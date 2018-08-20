const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers');
const typeDefs = require('./schemas');

const app = new ApolloServer({ typeDefs, resolvers });

module.exports = app;
