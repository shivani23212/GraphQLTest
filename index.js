const {ApolloServer} = require("apollo-server"); // import apollo serv
const {typeDefs} = require("./schema/type-defs");
const {resolvers} = require("./schema/resolvers")

// typeDefs - all GQL data definitions, resolvers - all functions
const server = new ApolloServer({typeDefs, resolvers}); // create instance of apollo server

server.listen().then(({ url } ) => {
    console.log(`I HAVE LISTENED AND THE API IS RUNNING AT ${url}`);
});