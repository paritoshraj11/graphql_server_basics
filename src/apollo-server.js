import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { appoloServerIntegration } from "./todoApp/apollo-todo-schema";
const MONGO_URL = `localhost/graphql_basic`;

//connect to  database
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${MONGO_URL}`);

const app = express();
const PORT = 5000;

//apply-midleware for cross origin request response
app.use(cors());

//applying app server with appolo server
appoloServerIntegration(app);

app.all("/", (req, res) => {
  res.json({
    msg: "welcome to graphql"
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
