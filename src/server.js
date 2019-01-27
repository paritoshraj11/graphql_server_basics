import express from "express";
import graphqlHttp from "express-graphql";
import schema from "./schema.js";
import resolver from "./resolver";
import mongoose from "mongoose";
const MONGO_URL = `localhost/graphql_basic`;

//connect to  database
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${MONGO_URL}`);

const app = express();
const PORT = 5000;

//initializing resolver for graphql
const root = resolver;
//setting express-graphql middleware
app.use(
  "/graphql",
  graphqlHttp({
    schema: schema, //schema for your app
    // rootValue: root, // resolver (object) for your graphql , here is  actual code  to connect with graphql
    graphiql: true //providing graphql browser tools
  })
);

app.all("/", (req, res) => {
  res.json({
    msg: "welcome to graphql"
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
