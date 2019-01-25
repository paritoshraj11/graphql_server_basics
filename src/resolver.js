const Users = [];
const resolver = {
  //when ever query on item called this return item resolver function  run and give result
  item: () => {
    return {
      id: new Date(),
      text: "introduction",
      time: new Date(),
      timeIso: new Date(),
      deleted: false,
      title: "learning graphql"
    };
  },
  //resolver for findUserById
  findUserById: ({ id }) => {
    return Users.find(user => user.id == id);
  },
  //ressolvers of user
  users: () => {
    return Users;
  },
  //resolver for create user
  createUser: ({ input }) => {
    Users.push(input);
    return input;
  }
};

export default resolver;
