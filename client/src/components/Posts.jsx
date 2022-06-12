import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className="m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-row p-3 rounded-md hover:shadow-2xl"
    >
    <div className='flex flex-col items-center w-full mt-3'>
      <div className="display-flex justify-start w-full mb-6 p-2">
        <Post />
        <Post />
      </div>
    </div>
    </div>
  )
}

export default Posts