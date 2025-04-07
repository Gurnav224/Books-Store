import React, { useState } from 'react'

const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleEmail = (e) => setEmail(e.target.value);

    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            setIsLoggedIn(true);
        }
    }



    return (<>
        {
            isLoggedIn ? (
                <p className='text-green-500 font-semibold mt-8 text-2xl text-center'> 🎉 Congratulations! You have successfully logged in.</p>
            )

                :

                (<div className='flex flex-col justify-center items-center my-20 px-4'>
                    <h1 className='font-semibold text-2xl'>Login Form</h1>
                    <form className='flex flex-col gap-10 w-full sm:w-2/3 lg:w-1/2 mx-4 my-10 bg-blue-600 py-12 px-6 rounded-lg'
                    onSubmit={handleSubmit}>
                        
                        <div className='flex gap-5'>
                            <label htmlFor="userId">Email: </label>
                            <input type="email" name="userEmail" id="userId" placeholder='Enter your email'
                                onChange={handleEmail}
                                className='w-1/2 bg-blue-300 rounded px-2'
                                required />
                        </div>

                        <div className='flex gap-5'>
                            <label htmlFor="userId">Password: </label>
                            <input type="password" name="password" id="userPassword" placeholder='Enter password'
                                onChange={handlePassword}
                                className='w-1/3 bg-blue-300 rounded px-2'
                                required />
                        </div>

                        <div className='mx-auto mt-5'>
                            <button 
                            type="submit"
                                className='text-lg px-4 bg-gray-100 rounded-lg cursor-pointer'>Login</button>
                        </div>
                    </form>
                </div>)
        }
    </>
    )
}

export default LogIn