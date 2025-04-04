import React, { useState } from 'react'

const LogIn = () => {

    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    return (
        <div className='flex flex-col justify-center items-center my-20'>
            <h1 className='font-semibold text-2xl'>Login Form</h1>
            <form className='flex flex-col gap-10 w-1/2 mx-auto my-10 bg-blue-600 py-12 px-6 rounded-lg'>
                <div className='flex gap-5'>
                    <label htmlFor="userId">name: </label>
                    <input type="text" name="userName" id="userId" placeholder='Full Name'
                        className='w-1/3 bg-blue-300 rounded px-2'
                        required />
                </div>

                <div className='flex gap-5'>
                    <label htmlFor="userId">Email: </label>
                    <input type="email" name="userEmail" id="userId" placeholder='Enter your email'
                        className='w-1/2 bg-blue-300 rounded px-2'
                        required />
                </div>

                <div className='flex gap-5'>
                    <label htmlFor="userId">Password: </label>
                    <input type="email" name="userEmail" id="userId" placeholder='Enter password'
                        className='w-1/3 bg-blue-300 rounded px-2'
                        required />
                </div>

                <div className='mx-auto mt-5'>
                    <button type="submit" className='text-lg px-4 bg-gray-100 rounded-lg cursor-pointer'>Loggin</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn