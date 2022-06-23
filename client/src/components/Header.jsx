import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate, useLocation} from "react-router-dom";
import logo from '../images/logo.png'


const Header = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  useEffect(() => {
    const token = user?.token;
    // JWT ...
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  const navigate = useNavigate()
  const logout = () => {
    dispatch({type:"LOGOUT"})
    navigate('/')
    setUser(null)
  }

  return (
    <div className='relative md:inset-1/4 flex flex-wrap rounded-2xl items-center justify-between w-full md:w-1/2  p-5 m-y-5 bg-white shadow-[0_5px_10px_-1px_grey]'>
        <div className='flex justify-start items-center'>
          <div className="flex-initial  justify-start items-center p-4">
            <img src={logo} alt="logo" className="w-16 cursor-pointer" />    
          </div>
          <a href="/"><h1 className='text-5xl font-fancy'>read it</h1></a>
        </div>
        <div>
        {user ?
         <div className='flex items-center'>
          {/* <div className='m-4'><img className='object-cover'>{user.result.picture}</img></div> */}
          <div className='m-4'><h1>{user.result.given_name}</h1></div>
          <div className="md:flex cursor-pointer md:w-auto px-4 py-2 text-right bg-[#8b0000] hover:bg-[#FF0000 text-white font-edit rounded">
            <button onClick={logout}>Sign Out</button>
          </div>
         </div>
         : 
        <div className="md:flex cursor-pointer md:w-auto px-4 py-2 text-right bg-[#809fff] hover:bg-[#1a66ff] text-white font-edit rounded">
         <a href="/auth"><button>Sign In</button></a>  
        </div>
        }
        </div>
        
    </div>
  )
}

export default Header