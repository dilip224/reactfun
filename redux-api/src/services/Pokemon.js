// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
    //   query: () => ({url:"posts",method:"GET"}),
      query: () => ({
        // url:"pokemon",
        url:"pokemon?_limit=5",
      method:"GET"}),
      
    }),
    deletePostByName:builder.mutation({
        query: (name) => ({
            // url:"pokemon",
            url:`pokemon/${name}`,
          method:"DELETE"}),
    });
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery,useDeletePostByNameMutation } = pokemonApi