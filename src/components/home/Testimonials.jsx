import React, { useEffect, useState } from 'react'
import sampleData from '../../testimonial'
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    const [currentDataToShow, setCurrentDataToShow] = useState(sampleData.slice(currentIndex, visibleCount));

    useEffect(() => {

        const updateVisibleItems = () => {
            setVisibleCount(3);

            if (window.innerWidth < 640) setVisibleCount(1);

            if (window.innerWidth < 768) setVisibleCount(2);


            // console.log(currentDataToShow)
        }

        updateVisibleItems();
        
        window.addEventListener('resize', updateVisibleItems);

        return () => window.removeEventListener("resize", updateVisibleItems);

    }, [currentIndex, visibleCount]);

    useEffect(() => {
        setCurrentDataToShow(sampleData.slice(currentIndex, currentIndex + visibleCount));
    }, [currentIndex, visibleCount]);

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + visibleCount < sampleData.length) ? prevIndex + 1 : 0);
    }

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0) ? sampleData.length - visibleCount : prevIndex - 1);
    }

    return (
        <div className='flex flex-col items-center gap-10 my-40 mx-5 sm:mx-10 lg:mx-20'>
            <h1 className='font-semibold text-3xl'>Testimonials</h1>

            <div className='flex items-center rounded-lg flex-wrap'>
                <span onClick={handlePrev}
                    className='bg-white text-black absolute left-2 sm:left-4 lg:left-16 p-2 rounded-full text-2xl cursor-pointer'>
                    <IoMdArrowBack />
                </span>
                <div className='flex gap-16'>
                    {
                        currentDataToShow.map((item) => (
                            <div key={item.id}
                                className='flex flex-col items-center bg-gray-100 my-10 px-2 lg:px-5 rounded-lg shadow-md gap-10 py-4 sm:py-6 lg:py-10 w-full'>
                                <div className='flex flex-col gap-2 items-center'>
                                    <img src={item.img} alt={item.name} className='rounded-full h-20 w-20 object-cover' />
                                    <h2 className='font-medium text-gray-800'>{item.name}</h2>
                                </div>
                                <p className='px-4 lg:px-12 text-center text-gray-600 text-xs sm:text-sm lg:text-lg'>{item.comment}</p>
                            </div>
                        ))
                    }
                </div>
                <span onClick={handleNext}
                    className='bg-white text-black absolute right-4 lg:right-16 p-2 rounded-full text-2xl cursor-pointer'>
                    <IoMdArrowForward />
                </span>
            </div>
        </div>
    )
}

export default Testimonials