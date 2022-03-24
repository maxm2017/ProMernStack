

const express = require('express');
const { AppolloServer } = require('apollo-server-express');

let aboutMessage = "Issue Tracker API v1.0";

function setAboutMessage(_,{ message }){
    return aboutMessage = message;
}

const typeDefs = `
    type Query {
        about:String!
    }
    type Mutation {
        setAboutMessage(message: String!):String
    } `;

    const resolvers = {
        Query: {
            about: () => aboutMessage,
        },
        Mutation: {
            setAboutMessage,
        },
    };

const server = new AppolloServer({
    typeDefs,
    resolvers,
});

const app = express();
app.use(express.static('public'));

server.applyMiddleware({app, path: '/graphql'});

app.listen(3000, function () {
 console.log('App started on port 3000');
});