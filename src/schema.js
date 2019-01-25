import { buildSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

const schema = buildSchema(`
type HackerNewsItem {
    id :ID
    title :String
}

type Email {
    email : String
}

type User {
    id : ID
    firstName:String
    lastName :String
    email : String
    gender : Gender
    items :[HackerNewsItem]
}

#query object

type Query {
    item : HackerNewsItem
    findUserById(id : ID) : User
    users : [User]
}

enum Gender {
    MALE
    FEMALE
    OTHERS
}


#define hackernews input item for user input 

input hackerNewsItemInput  {
    id : ID!
    title : String
}


input UserInput {
    id : String!
    firstName:String!
    lastName :String!
    emails : String 
    gender : Gender
    items: [hackerNewsItemInput] 
}

#mutation object

type Mutation {
    createUser(input : UserInput) : User
}

`);

export default schema;
