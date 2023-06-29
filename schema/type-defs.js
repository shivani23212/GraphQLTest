const {gql} = require(`apollo-server`) // pure gql code

const typeDefs = gql `

    type User {
        id: ID!,
        name: String!, # required field
        username: String!,
        age: Int!,
        nationality: String!
    }

    type Query { # all GQL schemas must have this type
        users: [User!]!, # at least empty list returned
    }
`;

module.exports = {typeDefs};
