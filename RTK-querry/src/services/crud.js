// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'mynewcrud',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAllDoc: builder.query({
      query: (name) =>({ url:`${name}`,method:"GET"})
    }),
    deleteData: builder.mutation({
        query: (name) =>({ 
            url:`posts/${name}`,
            method:"DELETE",
            
        })
      }),
      createData: builder.mutation({
        query: (name) =>({ 
            url:`posts`,
            method:"POST",
            body: name,
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            
        })
      }),
      updateData: builder.mutation({
        query: (name) =>{
            const {id,...data}=name
            console.log(id)
            console.log(data)
        return{ 
            // id:id,
            url:`posts/${id}`,
            method:"PUT",
            body: data,
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            
        }
    }
      }),
  }),
  
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllDocQuery,useDeleteDataMutation,useCreateDataMutation,useUpdateDataMutation } = pokemonApi