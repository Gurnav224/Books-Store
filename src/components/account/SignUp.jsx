import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { signUpAsync } from '../../redux/features/authSlice/authSlice';

const SignUp = () => {

    const auth = useSelector((state) => state.auth);
    console.log(auth);
    const dispatch = useDispatch();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [isSignedIn, setIsSignedIn] = useState(false);

    const handleUserName = (e) => setUserName(e.target.value);

    const handleEmail = (e) => setEmail(e.target.value);

    const handlePassword = (e) => setPassword(e.target.value);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (userName && email && password) {
    //         try {
    //             const response = await fetch('https://book-store-backend-red.vercel.app/auth/signin', {
    //                 method: 'POST',
    //                 headers: {
    //                     "Content-type": "application/json"
    //                 },
    //                 body: JSON.stringify({
    //                     userName,
    //                     email,
    //                     password
    //                 })
    //             });
    //             // const data = await response.json();
    //             const text = await response.text();
    //             console.log("Raw response:", text);

    //             if (response.ok) {
    //                 setIsSignedIn(true);
    //                 console.log("Sign in successful:", data);
    //             } else {
    //                 console.error("Sign in failed:", data.message || data);
    //                 alert("Sign in failed:" + (data.message || "Unknown error"));
    //             }

    //         } catch (error) {
    //             console.error("Error signing in:", error);
    //             alert("Network Error: " + error.message);
    //         }
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUpAsync({userName , email, password}))
    }

    return (<>
        {
            // isSignedIn ? (
            //     <p className='text-green-500 font-semibold mt-8 text-2xl text-center'> 🎉 Congratulations! You have successfully Signed in.</p>
            // )

            //     :

                <div className='flex flex-col justify-center items-center my-20 px-4'>
                    <h1 className='font-semibold text-2xl'>Create Account</h1>
                    <form className='flex flex-col gap-10 w-full sm:w-2/3 lg:w-1/2 mx-4 my-10 bg-blue-600 py-12 px-6 rounded-lg'
                        onSubmit={handleSubmit}>
                        <div className='flex gap-5'>
                            <label htmlFor="userId">name: </label>
                            <input type="text" name="userName" id="userId" placeholder='Full Name'
                                onChange={handleUserName}
                                className='w-1/3 bg-blue-300 rounded px-2'
                                required />
                        </div>

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
                                className='text-lg px-4 bg-gray-100 rounded-lg cursor-pointer'>SignIn</button>
                        </div>
                    </form>
                </div>
        }
    </>
    )
}

export default SignUp