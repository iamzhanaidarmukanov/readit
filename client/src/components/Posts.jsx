import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts);
  return (
    <div className='grid grid-cols-3 gap-2 m-[0.5em] ml-[1em]'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Posts