import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder)=>{
        return {
            getPosts: builder.query({
                query: ({limit, offset})=> `/posts?_limit=${limit}&_offset=${offset}`
            })

        }
        
    }
})


export const {useGetPostsQuery} = apiSlice