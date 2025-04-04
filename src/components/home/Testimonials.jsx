import React, { useEffect, useState } from 'react'
import sampleData from '../../testimonial'
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    // const [showLeftArrow, setShowLeftArrow] = useState(true);
    // const [showRightArrow, setShowRightArrow] = useState(true);

    const [currentDataToShow, setCurrentDataToShow] = useState(sampleData.slice(currentIndex, currentIndex + 3));

    useEffect(() => {
       setCurrentDataToShow(sampleData.slice(currentIndex, currentIndex + 3));
    }, [currentIndex]);

    console.log(currentDataToShow)

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 3 < sampleData.length - 1) ? prevIndex + 1 : 0);
    }

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0) ? sampleData.length - 3 : prevIndex - 1);
    }

    return (
        <div className='flex flex-col items-center gap-20 my-40'>
            <h1 className='font-semibold text-3xl'>Testimonials</h1>

            <div className='flex gap-16 mx-20 items-center rounded-lg'>
                {
                    // showLeftArrow && (
                        <span onClick={handlePrev}
                            className='bg-white text-black absolute hidden sm:block left-4 lg:left-16 p-2 rounded-full text-3xl cursor-pointer'>
                            <IoMdArrowBack />
                        </span>
                        // )
                }
                {
                    currentDataToShow.map((item) => (
                        <div key={item.id}
                            className='flex flex-col items-center bg-gray-100 my-10 p-5 rounded-lg shadow-md gap-10 py-10'>
                            <div className='flex flex-col gap-2 items-center'>
                                <img src={item.img} alt={item.name} className='rounded-full h-20 w-20 object-cover' />
                                <h2>{item.name}</h2>
                            </div>
                            <p className='px-12 text-center text-gray-600'>{item.comment}</p>
                        </div>
                    ))
                }
                {
                    // showRightArrow && (
                        <span onClick={handleNext}
                            className='bg-white text-black absolute hidden sm:block right-4 lg:right-16 p-2 rounded-full text-3xl cursor-pointer'>
                            <IoMdArrowForward />
                        </span>
                    // )
                }
            </div>
        </div>
    )
}

export default Testimonials