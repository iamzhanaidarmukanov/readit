import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='grid grid-cols-3 gap-2 m-[0.5em] ml-[1em]'>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts