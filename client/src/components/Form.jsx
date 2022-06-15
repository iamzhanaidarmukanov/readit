import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createPost, updatePost} from '../actions/posts'

const Form = ({currentId, setCurrentId}) => {
  const [postData, setPostData] = useState({
    author:'',
    title:'',
    review:'',
    selectedFile:''
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if(currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
    clear()
  }

  // Updating Post : Populating the Form
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
  useEffect(() => {
    if(post) setPostData(post)
  }, [post])

  const clear = () => {
    setCurrentId(null)
    setPostData({
    author:'',
    title:'',
    review:'',
    selectedFile:''
  })
  }
  const dispatch = useDispatch()
  return (
    <div className='shadow-[0_5px_10px_-1px_grey] bg-white text-center rounded overflow-visible h-[300px] w-auto m-[0.5em]'>
      <h1 className='text-3xl font-bold text-center font-bookheading'>&bull;{currentId ? "Edit" : "Add"} Book &bull;</h1>
      <div className="text-center border-2 w-[50%] relative m-auto bg-[#94b49f]"></div>
      <form autoComplete='off' action="#" method="post" className='p-auto m-auto text-center font-review w-full'>
        <div className="m-4"> 
          <input className='border-b-2' type="text" placeholder="Title" value={postData.title} required onChange={(e) => setPostData({...postData, title:e.target.value})} />
        </div>
        <div className="m-4"> 
          <input className='border-b-2' type="text" placeholder="Author" value={postData.author} required onChange={(e) => setPostData({...postData, author:e.target.value})} />
        </div>
        <div className="m-4">
          <textarea className='border-b-2' name="message" placeholder="Review..." value={postData.review} id="message_input" cols="50" rows="2" required onChange={(e) => setPostData({...postData, review:e.target.value})}></textarea>
        </div>
        <div className="m-4"> 
          <input className='border-b-2' name="message" placeholder="Image Link" value={postData.selectedFile} id="message_input" cols="50" rows="2" required onChange={(e) => setPostData({...postData, selectedFile:e.target.value})}></input>
        </div>
        <button className="bg-[#809fff]  rounded relative overflow-hidden cursor-pointer outline-none border-none p-1 m-1 text-[#eee] hover:bg-[#1a66ff] w-1/3" onClick={handleSubmit}>
          <span className="font-edit inline-block p-10px-20px text-l m-0" type='submit'>Post</span>
        </button>
        <button className="bg-[#809fff]  rounded relative overflow-hidden cursor-pointer outline-none border-none p-1 m-1 text-[#eee] hover:bg-[#1a66ff] w-1/3" onClick={clear}>
          <span className="font-edit inline-block p-10px-20px text-l m-0" onClick={clear}>Clear</span>
        </button>
      </form>
    </div>
  )
}

export default Form