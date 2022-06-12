import React from 'react'

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

const Post = () => {
  return (
  <div className='shadow-[0_5px_10px_-1px_grey] bg-white text-center rounded overflow-hidden h-[300px] w-[450px] mb-4'>
    <div className='relative text-left overflow-hidden p-[20px] h-[100%] float-left w-[55%]'>
      <h1 className='font-bookheading inline-block relative text-xl text-[#94b49f] m-none'>Martin Eden</h1>
      <h2 className='font-bookheading inline-block relative text-l text-[#94b49f] m-none'>by Jack London</h2>
      <Rating />
      <p class="font-review text-center text-sm text-[7d7d7d]">" Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.</p>
      <div className='absolute bottom-8 left-1/4'>
        <button class="bg-[#809fff] rounded relative overflow-hidden cursor-pointer outline-none border-none p-0 m-0 text-[#eee] hover:bg-[#1a66ff] w-16">
          <span class="font-edit inline-block p-10px-20px text-l m-0">Info</span>
        </button>
      </div>
    </div>
      <div className='inline-block relative overflow-hidden h-[100%] float-right w-[45%]'>
        <img src="https://images-na.ssl-images-amazon.com/images/I/41TpuuUdewL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
      </div>
    </div>
  )
}

export default Post