import React from 'react'
import logo from '../images/logo.png'

const Header = () => {

  const user = null;


  return (
    <div className='relative md:inset-1/4 flex flex-wrap rounded-2xl items-center justify-between w-full md:w-1/2  p-5 m-y-5 bg-white shadow-[0_5px_10px_-1px_grey]'>
        <div className='flex justify-start items-center'>
          <div className="flex-initial  justify-start items-center p-4">
            <img src={logo} alt="logo" className="w-16 cursor-pointer" />    
          </div>
          <a href="/"><h1 className='text-5xl font-fancy'>read it</h1></a>
        </div>
        <div className="md:flex cursor-pointer md:w-auto px-4 py-2 text-right bg-[#809fff] hover:bg-[#1a66ff] text-white font-edit rounded">
        {user ? <div>Hello</div> :  <a href="/auth"><button>Sign In</button></a>}
        </div>
    </div>
  )
}

export default Header