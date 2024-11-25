import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEURL = import.meta.env.VITE_APP_BASE_URL
const APIKEY =  import.meta.env.VITE_APP_API_KEY

export const  MovieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery ({baseurl: `${BASEURL}`}),
    endpoints:(builder) =>({
        getPopularMovies:builder.query({
            query:() => (`${BASEURL}/movie/popular?api_key= ${APIKEY}`)
        })
    })
})




export const {useGetPopularMoviesQuery} = MovieApi