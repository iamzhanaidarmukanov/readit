import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts)
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 m-[0.5em] ml-[1em]'>
      {posts.map((post) => (
        <Post key={post.id} post={post} setCurrentId={setCurrentId} />
      ))}
    </div>
  )
}

export default Posts