const {UserList} = require("../data")

const resolvers = { // all resolver functions that exist for the Query type
    Query: {
        users() {
            // make API call to db to get info about users or
            return UserList;


        }

    }
}

module.exports = {resolvers};