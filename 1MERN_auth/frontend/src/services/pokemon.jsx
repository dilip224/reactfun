// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes:['post'],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `/`,
    //   url:"/",
    //   method:"GET"
    }),
    findByEmail: builder.mutation({
      
      query: (email) => {
        const data={email:email}
        return{
        url: `/gput`,
          method:"POST",
          body:data,
          headers:{
            "Content-Type":"application/json;charset=UTF-8"
          }
      }}
    //   url:"/",
    }),
    regData:builder.mutation({
        query:(body)=>{
            const {check,cpassword,...all}=body
            console.log(JSON.stringify(all))
            return{
                url:'/reg',
                method:"POST",
                body:all,
                headers:{
                  "Content-Type":"application/json; charset=UTF-8",
                }
            }

        }
    }),
    logData:builder.mutation({
      query:(body)=>{
          // const {check,cpassword,...all}=body
          // console.log(JSON.stringify(all))
          return{
              url:'/log',
              method:"POST",
              body:body,
              headers:{
                "Content-Type":"application/json; charset=UTF-8",
              }
          }

      }
  }),
  UpdateData:builder.mutation({
    query:(body)=>{
        const {id,password}=body
        console.log(id,password)
        // console.log(JSON.stringify(all))
        return{
            url:`/put/${id}`,
            method:"PUT",
            body:body,
            headers:{
              "Content-Type":"application/json; charset=UTF-8",
            }
        }

    }
})
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
   useGetPokemonByNameQuery,
   useLogDataMutation,
   useRegDataMutation,
   useUpdateDataMutation,
   useFindByEmailMutation,
   } = pokemonApi 