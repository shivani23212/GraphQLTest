import React from 'react'
import {useQuery, gql} from "@apollo/client";

const QUERY_ALL_USERS = gql `
    query GetAllUsers {
        users {
            id
            name
            age
            username
        }
    }
`
const QUERY_ALL_MOVIES = gql `
    query getAllMovies {
        movies {
            id
            name
        }
    }
`

function DisplayData() {
    const {data, loading} = useQuery(QUERY_ALL_USERS);
    const {data: movieData} = useQuery(QUERY_ALL_MOVIES);

    if (loading) {return <h1>Data is Loading</h1>;}

    if (movieData) {console.log(data);}
    else {
        console.log("FAIL");
    }

    return <div>
         {/* if data exists then take every user and get its listen properties */}
        {data && data.users.map((user) => { 
            return <div key={user.id}>
                <h1>Name: {user.name} </h1>
                <h1>Username: {user.username} </h1>
                <h1>Age: {user.age} </h1>
            </div>
        })}

        {movieData && movieData.movies.map((movie) => { 
            return <div>
                <h1>ID: {movie.id} </h1>
                <h1>Title: {movie.name} </h1>
            </div>
        })}
    </div>

}

export default DisplayData;