import React from 'react'

const Form = () => {
  return (
    <div className='shadow-[0_5px_10px_-1px_grey] bg-white text-center rounded overflow-visible h-[300px] w-auto m-[0.5em]'>
      <h1 className='text-3xl font-bold text-center font-bookheading'>&bull; Add Book &bull;</h1>
      <div class="text-center border-2 w-[50%] relative m-auto bg-[#94b49f]"></div>
      <form action="#" method="post" id="contact_form" className='p-auto m-auto text-center font-review w-full'>
        <div class="m-4"> 
          {/* <label for="name"></label> */}
          <input className='border-b-2' type="text" placeholder="Title" required />
        </div>
        <div class="m-4"> 
          {/* <label for="name"></label> */}
          <input className='border-b-2' type="text" placeholder="Author" required />
        </div>
        <div class="m-4">
          <label for="message"></label>
          <textarea className='border-b-2' name="message" placeholder="Review..." id="message_input" cols="50" rows="2" required></textarea>
        </div>
        <button class="bg-[#809fff]  rounded relative overflow-hidden cursor-pointer outline-none border-none p-1 m-1 text-[#eee] hover:bg-[#1a66ff] w-1/3">
          <span class="font-edit inline-block p-10px-20px text-l m-0">Post</span>
        </button>
        <button class="bg-[#809fff]  rounded relative overflow-hidden cursor-pointer outline-none border-none p-1 m-1 text-[#eee] hover:bg-[#1a66ff] w-1/3">
          <span class="font-edit inline-block p-10px-20px text-l m-0">Clear</span>
        </button>
      </form>
    </div>
  )
}

export default Form