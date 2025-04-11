import React from 'react'
import { useGetPostsQuery } from '../../apiSlice'

const ApiList = () => {
    const { data: posts } = useGetPostsQuery({
        limit:10,
        offset:1
    })
  return (
    <div>
        <ul>
            {posts?.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default ApiList