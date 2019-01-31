import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./toDoResolvers";
export const typeDefs = `
type Todo {
    id : ID
    title:String
    description:String
    completed :Boolean
    created :String
    remindDate:String
}


input ToDoInput {
    title:String
    description:String,
    remindDate:String
}

type Query{
  getAllTodos : [Todo]
}
type Mutation {
  addTodo(input:ToDoInput):Todo
}

`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
