import React, { useState } from 'react'
import {useQuery, useLazyQuery, gql} from "@apollo/client";

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

const GET_SEARCHED_MOVIE = gql `
    query getSearchedMovie($name: String!) {
        movie(name: $name) {
            id
            name
        }
    }


`

function DisplayData() {
    const {data, loading} = useQuery(QUERY_ALL_USERS);
    const {data: movieData} = useQuery(QUERY_ALL_MOVIES);
    const [movieSearched, setMovieSearched] = useState(""); // state begins as ""
    const [fetchMovie, {data: movieSearchedData, error: movieError}] = useLazyQuery(GET_SEARCHED_MOVIE);
    // function and what we want to fetch

    if (loading) {return <h1>Data is Loading</h1>;}

    if (movieData) {console.log(data);}
    else {
        console.log("FAIL");
    }

    if (movieError) {
        console.log(movieError);
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

        <div>
            <input type="text" placeholder="movie name..." onChange= {
                (event) => setMovieSearched(event.target.value)
            } // for each input change, get the string entered and change the
            // value of movieSearched to this string
            />
            <button onClick={() => {
                fetchMovie({
                    variables: {
                    name: movieSearched
                    },
                })
            }} 
                >
                {" "}    
                Fetch</button>
            <div>
                {/* fetched data goes here */}
                {movieSearchedData && <div>
                    <h1>ID: {movieSearchedData.movie.id}</h1>{" "}
                    <h1>Name: {movieSearchedData.movie.name}</h1>{" "}
                    </div>}
                {movieError && <h1>Error in fetching data.</h1>}

            </div>
        </div>

    </div>

}

export default DisplayData;