import { buildSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolver";

const typeDefs = `

#defining types
enum Gender {
    MALE
    FEMALE
    OTHERS
}

type Email {
    email : String
}

type HackerNewsItem {
    id :ID
    title :String
    text :String

}

type User {
    id : ID
    firstName:String!
    lastName :String
    email : String
    gender : Gender
    items :[HackerNewsItem]
}

#defining  input for mutations 

input hackerNewsItemInput  {
    title : String
    text: String
}


input UserInput {
    firstName:String!
    lastName :String
    email : String 
    gender : Gender
    items: [ID!] 
}
input UserUpdateInput {
    id : ID
    firstName:String!
    lastName :String
    email : String 
    gender : Gender
    items: [ID] 
}

#query object

type Query {
    item : HackerNewsItem
    findUserById(id : ID) : User
    getUsers : [User]
    getItem(id : ID ) : HackerNewsItem
}

#mutation object

type Mutation {
    createUser(input : UserInput) : User
    updateUser(input:UserUpdateInput): User
    deleteUser(id:ID!): User
    createItem(input : hackerNewsItemInput) : HackerNewsItem
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
