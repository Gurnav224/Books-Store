import React from 'react'
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RiDiscordLine } from "react-icons/ri";

const Footer = () => {


    return (
        <footer className='bg-gray-100 py-12'>
            <h1 className="text-2xl font-bold ml-20 pb-2 border-b w-fit">Book Store</h1>

            <section className="flex flex-col gap-16 lg:gap-32 ml-20 py-6 lg:flex-row">
                <div className='flex flex-col gap-4 py-6'>
                    <h2 className='font-semibold text-xl '>Company</h2>
                    <div className='flex flex-col text-sm gap-2 text-gray-600'>
                        <p>About us</p>
                        <p>Terms & conditions</p>
                        <p>Privacy policy</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 py-6'>
                    <h2 className='font-semibold text-xl'>Social links</h2>
                    <div className='text-xl flex gap-2 text-gray-800'>

                        <span className='cursor-pointer shadow-2xs hover:shadow-md shadow-gray-400 rounded-full w-12 h-12 bg-white flex items-center justify-center'>
                            <FaXTwitter /></span>
                        <span className='cursor-pointer shadow-2xs hover:shadow-md shadow-gray-400 rounded-full w-12 h-12 bg-white flex items-center justify-center'>
                            <FaLinkedinIn /></span>
                        <span className='cursor-pointer shadow-2xs hover:shadow-md shadow-gray-400 rounded-full w-12 h-12 bg-white flex items-center justify-center'>
                            <BsInstagram /></span>
                        <span className='cursor-pointer shadow-2xs hover:shadow-md shadow-gray-400 rounded-full w-12 h-12 bg-white flex items-center justify-center'>
                            <RiDiscordLine /></span>


                    </div>
                </div>
            </section>
        </footer>
    )

}

export default Footer