import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className='flex justify-left items-center p-4'>
        <div className="flex-initial justify-center items-center p-4">
            <img src={logo} alt="logo" className="w-32 cursor-pointer" />    
        </div>
        <h1 className='text-6xl font-fancy'>read it</h1>
    </div>
  )
}

export default Header