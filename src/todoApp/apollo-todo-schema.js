import { ApolloServer, gql } from "apollo-server-express";
import resolvers from "./toDoResolvers";
import { typeDefs as todoTypedefs } from "./toDoSchema";

export const typeDefs = gql(todoTypedefs);

const appoloServer = new ApolloServer({ typeDefs, resolvers });

export const appoloServerIntegration = app => {
  // here we integrate existing express app server with appolo-server using app instance
  appoloServer.applyMiddleware({ app });
};

//export default server;
