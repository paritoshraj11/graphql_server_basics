import ItemModel from "./models/items";
import UserSchema from "./models/user";
const Users = [];
const resolver = {
  Query: {
    findUserById: (_, args, context, info) => {
      let { id } = args;
      return Users.find(user => user.id == id);
    },
    getItem: async (_, { id }) => {
      let item = await ItemModel.findOne({ _id: id });
      return item;
    },
    getUsers: async () => {
      return await UserSchema.find().populate("items");
    }
  },
  Mutation: {
    //resolver for  user
    createUser: async (_, args, context, info) => {
      let { input } = args;
      let user = await UserSchema.create(input);
      return await UserSchema.findById(user._id).populate("items");
    },
    updateUser: async (_, { input }) => {
      let user = await UserSchema.findOneAndUpdate({ _id: input.id }, input).populate("items");
      return user;
    },
    deleteUser: async (_, { id }) => {
      let user = await UserSchema.findOneAndRemove({ _id: id }).populate("items");
      return user;
    },
    createItem: async (_, args) => {
      let { input } = args;
      return await ItemModel.create(input);
    }
  }
};

export default resolver;

/* 
using graphql-tools ,  resolver get four arguments 
parent_root 
arguments object here
context
info

*/
