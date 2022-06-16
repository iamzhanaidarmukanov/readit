import React from 'react'
import { useState } from 'react'
import {GoogleLogin} from 'react-google-login'

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  const changeMode = () => {
    setIsSignUp(!isSignUp)
  }


  const googleSuccess = async (res) => {
    console.log(res);
  }
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In failed. Try again later");
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
          <input className='w-2/3 md:w-[100px] border-b-2 mx-2' type="text" placeholder="First Name" name="firstName" required onChange={handleChange} />
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
        <div className='w-[100px] mx-auto my-2 cursor-pointer bg-[#809fff]  text-white font-review rounded'>
          <button>{isSignUp ? "Sign Up" : "Sign In"}</button>
        </div>
        <div className='text-gray-500'>
          {isSignUp ? <span>Already have an account? <button className='hover:text-gray-800' onClick={changeMode}>Sign In</button></span> : <span>Don't have an account? <button className='hover:text-gray-800' onClick={changeMode}>Sign Up</button></span>}
        <button onClick={changeMode}></button>
        </div>
      </form>

      <div className="font-review flex justify-between items-center mt-3">
        <hr className="w-full"/>
          <span className="p-2 text-gray-400 mb-1">OR</span>
        <hr className="w-full"/>
      </div>

        <GoogleLogin 
          clientId='1082905631463-uoeki5spdcmbi4e7g8q8tgrggfjum5t8.apps.googleusercontent.com'
          render = {(renderProps) => (
            <button className="h-8 text-white w-full rounded-lg bg-red-700 hover:bg-red-900" onClick={renderProps.onClick} variant="contained" disabled={renderProps.disabled}>
              <i className="fa fa-google mr-2" />
              Google
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
          />

    </div>
  )
}

export default Auth

// { "error": "idpiframe_initialization_failed", 
// "details": "You have created a new client application that uses libraries for user authentication
//  or authorization that will soon be deprecated. 
// New clients must use the new libraries instead; 
// existing clients must also migrate before these libraries are deprecated. 
// See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information." }