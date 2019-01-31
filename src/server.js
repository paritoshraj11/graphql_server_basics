import express from "express";
import graphqlHttp from "express-graphql";
//import schema from "./schema.js";
import schema from "./todoApp/toDoSchema";
import resolver from "./resolver";
import mongoose from "mongoose";
import cors from "cors";
const MONGO_URL = `localhost/graphql_basic`;

//connect to  database
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${MONGO_URL}`);

const app = express();
const PORT = 5000;

app.use(cors());

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

app.get("/testing", (req, res) => {
  res.json({
    msg: "this is testing api"
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
