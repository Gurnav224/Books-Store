import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-white py-6 fixed top-0 left-0 w-full border-b border-gray-200'>
        <div className='w-full flex justify-around items-center'>
            <h1 className='font-bold text-2xl'>BookStore</h1>

            <ul className='flex gap-10 text-gray-600'>
              <NavLink to={"/"} className='hover:text-blue-600 cursor-pointer'>Home</NavLink>
              <NavLink to={"/books"} className='hover:text-blue-600 cursor-pointer'>Books</NavLink>
              <NavLink to={"/about"} className='hover:text-blue-600 cursor-pointer'>About</NavLink>
            </ul>

            <NavLink to={"/account"} className='text-black text-base cursor-pointer hover:underline'>Account</NavLink>
        </div>
    </header>
  )
}

export default Header