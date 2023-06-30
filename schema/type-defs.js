const {gql} = require(`apollo-server`) // pure gql code

const typeDefs = gql `

    type User {
        id: ID!,
        name: String!, # required field
        username: String!,
        age: Int!,
        nationality: Nationality!,
        friends: [User],
        favouriteMovies: [Movie]
    }

    type Movie {
        id: ID!,
        name: String!,
        yearOfPublication: Int!,
        isInTheaters: Boolean!
    }

    type Query { # all GQL schemas must have this type
        users: [User!]!, # at least empty list returned
        user(id: ID!): User!,
        movies: [Movie!]!,
        movie(name: String!): Movie!
    }

    input CreateUserInput { # helps the user to create new type instance
        name: String!, # required field
        username: String!,
        age: Int!,
        nationality: Nationality = CANADA
    }

    type Mutation {
        createUser(input: CreateUserInput!): User # GQL must return an obj when its created / updated
    }


    enum Nationality {
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    }
`;



module.exports = {typeDefs};
