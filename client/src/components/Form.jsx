import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createPost} from '../actions/posts'

const Form = () => {
  const [postData, setPostData] = useState({
    author:'',
    title:'',
    review:'',
    selectedFile:''
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost(postData))
  }
  const clear = () => {

  }
  const dispatch = useDispatch()
  return (
    <div className='shadow-[0_5px_10px_-1px_grey] bg-white text-center rounded overflow-visible h-1/2 w-auto m-[0.5em]'>
      <h1 className='text-3xl font-bold text-center font-bookheading'>&bull; Add Book &bull;</h1>
      <div className="text-center border-2 w-[50%] relative m-auto bg-[#94b49f]"></div>
      <form autoComplete='off' action="#" method="post" className='p-auto m-auto text-center font-review w-full' onSubmit={handleSubmit}>
        <div className="m-4"> 
          <input className='border-b-2' type="text" placeholder="Title" required onChange={(e) => setPostData({...postData, title:e.target.value})} />
        </div>
        <div className="m-4"> 
          <input className='border-b-2' type="text" placeholder="Author" required onChange={(e) => setPostData({...postData, author:e.target.value})} />
        </div>
        <div className="m-4">
          <textarea className='border-b-2' name="message" placeholder="Review..." id="message_input" cols="50" rows="2" required onChange={(e) => setPostData({...postData, review:e.target.value})}></textarea>
        </div>
        <div className="m-4"> 
          <input className='border-b-2' name="message" placeholder="Image Link" id="message_input" cols="50" rows="2" required onChange={(e) => setPostData({...postData, selectedFile:e.target.value})}></input>
        </div>
        <button className="bg-[#809fff]  rounded relative overflow-hidden cursor-pointer outline-none border-none p-1 m-1 text-[#eee] hover:bg-[#1a66ff] w-1/3">
          <span className="font-edit inline-block p-10px-20px text-l m-0" type='submit'>Post</span>
        </button>
        <button className="bg-[#809fff]  rounded relative overflow-hidden cursor-pointer outline-none border-none p-1 m-1 text-[#eee] hover:bg-[#1a66ff] w-1/3">
          <span className="font-edit inline-block p-10px-20px text-l m-0" onClick={clear}>Clear</span>
        </button>
      </form>
    </div>
  )
}

export default Form