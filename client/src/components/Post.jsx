import React from 'react'
import {useDispatch} from "react-redux"
import {deletePost} from '../actions/posts'
import { useState } from 'react'

const Rating = () => {
  return (
  <span className="inline-block ml-[0.5em] w-[50%]">
    <i className="fa fa-star text-[#FFD700] " aria-hidden="true"></i>
    <i className="fa fa-star text-[#FFD700] " aria-hidden="true"></i>
    <i className="fa fa-star text-[#FFD700] " aria-hidden="true"></i>
    <i className="fa fa-star text-[#FFD700] " aria-hidden="true"></i>
    <i className="fa fa-star-o text-[#FFD700] " aria-hidden="true"></i>
  </span>
  )
}

const Post = ({post, setCurrentId}) => {
  const dispatch = useDispatch()
  const [expand, setExpand] = useState(false)
  return (
    <>
      {!expand ? 
      <div className='shadow-[0_5px_10px_-1px_grey] bg-white text-center rounded overflow-hidden h-[300px] w-auto mb-4'>
      <div className='relative text-left overflow-hidden p-[20px] h-[300px] float-left w-[55%]'>
        <h1 className='font-bookheading inline-block relative text-xl text-[#94b49f] m-none'>{post.title}</h1>
        <h2 className='font-bookheading inline-block relative text-l text-[#94b49f] m-none'>by {post.author}</h2>
        <Rating />
        <p className="font-review text-center text-sm text-[7d7d7d]">{post.review.slice(0,150) + "..."}</p>
        <div className='absolute bottom-1 left-1'>
          <button className="bg-[#228B22]  rounded relative overflow-hidden cursor-pointer outline-none border-none p-0 m-0 text-[#eee] hover:bg-[#00FF00] w-12" onClick={() => expand ? setExpand(false) : setExpand(true)}>
            <span className="font-edit inline-block p-10px-20px text-l m-0">View</span>
          </button>
          <button className="bg-[#809fff]  rounded relative overflow-hidden cursor-pointer outline-none border-none p-0 m-0 text-[#eee] hover:bg-[#1a66ff] w-12" onClick={() => setCurrentId(post._id)}>
            <span className="font-edit inline-block p-10px-20px text-l m-0">Edit</span>
          </button>
          <button className="bg-[#8b0000]  rounded relative overflow-hidden cursor-pointer outline-none border-none p-0 m-0 text-[#eee] hover:bg-[#FF0000] w-12" onClick={() => dispatch(deletePost(post._id))}>
            <span className="font-edit inline-block p-10px-20px text-l m-0">Delete</span>
          </button>
        </div>
      </div>
      
      <div className='inline-block relative overflow-hidden h-[100%] float-right w-[45%]'>
        <img src={post.selectedFile} alt="" />
      </div>
    </div>
    :
    <div className='shadow-[0_5px_10px_-1px_grey] bg-white text-center rounded overflow-hidden h-autow-auto mb-4'>
      <div className='relative text-left overflow-hidden p-[20px] h-auto float-left w-[55%]'>
        <h1 className='font-bookheading inline-block relative text-xl text-[#94b49f] m-none'>{post.title}</h1>
        <h2 className='font-bookheading inline-block relative text-l text-[#94b49f] m-none'>by {post.author}</h2>
        <Rating />
        <p className="font-review text-center text-sm text-[7d7d7d]">{post.review}</p>
        <div className='relative'>
          <button className="bg-[#228B22]  rounded relative overflow-hidden cursor-pointer outline-none border-none p-0 m-0 text-[#eee] hover:bg-[#00FF00] w-12" onClick={() => expand ? setExpand(false) : setExpand(true)}>
            <span className="font-edit inline-block p-10px-20px text-l m-0">View</span>
          </button>
          <button className="bg-[#809fff]  rounded relative overflow-hidden cursor-pointer outline-none border-none p-0 m-0 text-[#eee] hover:bg-[#1a66ff] w-12" onClick={() => setCurrentId(post._id)}>
            <span className="font-edit inline-block p-10px-20px text-l m-0">Edit</span>
          </button>
          <button className="bg-[#8b0000]  rounded relative overflow-hidden cursor-pointer outline-none border-none p-0 m-0 text-[#eee] hover:bg-[#FF0000] w-12" onClick={() => dispatch(deletePost(post._id))}>
            <span className="font-edit inline-block p-10px-20px text-l m-0">Delete</span>
          </button>
        </div>
      </div>
      <div className='inline-block relative overflow-hidden h-[100%] float-right w-[45%]'>
        <img src={post.selectedFile} alt="" />
      </div>
    </div>}
    </>
  )
}

export default Post