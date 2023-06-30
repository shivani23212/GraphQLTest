const {UserList, MovieList} = require("../data");
const _ = require("lodash"); // used to look for item in list

const resolvers = { // all resolver functions that exist for the Query type
    Query: {
        users() {
            // make API call to db to get info about users or
            return UserList;
        },
        user(parent, args) {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)}); // find id with the value of what we entered in as the user
            return user;
        },
        movies() {
            return MovieList;
        },
        movie(parent, args) {
            const name = args.name; // args.name refers to name value passed in by user
            const movie = _.find(MovieList, {name: name});
            return movie;
        }

    },

    User: {
        favouriteMovies() {
            return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2000
            && movie.yearOfPublication <=2010);
        }
    }
}

module.exports = {resolvers};