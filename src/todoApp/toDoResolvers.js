import TodoModel from "../models/TodoModel";
export default (resolvers = {
  Query: {
    getAllTodos: async () => {
      return await TodoModel.find({}, null, { sort: { created: -1 } });
      //return all todos
    }
  },
  Mutation: {
    addTodo: async (_, args, context, infor) => {
      let { input } = args;
      console.log(">>>>> input", JSON.stringify(input));
      input = {
        ...input,
        completed: false
      };
      let todo = await TodoModel.create(input);
      return await TodoModel.findById(todo._id);
    }
  }
});
