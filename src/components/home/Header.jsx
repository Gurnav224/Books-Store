import React from 'react'

const Header = () => {
  return (
    <header className='bg-white py-6 fixed top-0 left-0 w-full border-b border-gray-200'>
        <div className='w-full flex justify-around items-center'>
            <h1 className='font-bold text-2xl'>BookStore</h1>

            <ul className='flex gap-10 text-gray-600'>
              <li className='hover:text-blue-600 cursor-pointer'>Home</li>
              <li className='hover:text-blue-600 cursor-pointer'>Books</li>
              <li className='hover:text-blue-600 cursor-pointer'>About</li>
            </ul>

            <h3 className='text-black text-base cursor-pointer hover:underline'>Account</h3>
        </div>
    </header>
  )
}

export default Header