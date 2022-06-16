import React from 'react'
import { useState } from 'react'

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  const changeMode = () => {
    setIsSignUp(!isSignUp)
  }
  return (
    <div className='shadow-[0_5px_10px_-1px_grey] mx-auto bg-white rounded w-full md:w-1/2  p-5 m-y-5 m-[0.5em]'>
      <img src="https://static.vecteezy.com/system/resources/previews/001/200/107/original/book-png.png" alt="book" className='w-12 mx-auto' />
      <div className='mx-auto'>
        {isSignUp 
      ? <h1 className='text-3xl font-bold text-center font-bookheading'>&bull; Sign Up &bull;</h1> 
      : <h1 className='text-3xl font-bold text-center font-bookheading'>&bull; Sign In &bull;</h1>}
      </div>
      <div className="text-center border-2 w-[50%] relative m-auto bg-[#94b49f]"></div>
      <form autoComplete='off' method="post" className='my-4 p-auto mx-auto text-center font-review w-full' onSubmit={handleSubmit}>
        {isSignUp && 
        <>
          <input className='w-2/3 md:w-[100px] border-b-2 mx-2' type="text" placeholder="First Name" name="firstName" autoFocus='true' required onChange={handleChange} />
          <input className='w-2/3 md:w-[100px] border-b-2 mx-2' type="text" placeholder="Last Name" name="lastName" required onChange={handleChange} />
          <br />
        </>}
        <input className='w-2/3 md:w-[200px] border-b-2' type="text" placeholder="Email" required onChange={handleChange} />
        <br />
        <input className='w-2/3 md:w-[200px] border-b-2' type="text" placeholder="Password" required onChange={handleChange} />
        <br />
        {isSignUp && <input className='w-2/3 md:w-[200px] border-b-2' type="text" placeholder="Confirm Password" required onChange={handleChange} />
        }
        <br />
        <div className='w-[100px] mx-auto my-2 cursor-pointer bg-[#809fff] hover:bg-[#1a66ff] text-white font-review rounded'>
          <button>Sign In</button>
        </div>
        <div className='text-gray-500 hover:text-gray-800'>
        <button onClick={changeMode}>{isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}</button>
        </div>
      </form>
    </div>
  )
}

export default Auth