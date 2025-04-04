import React, { useEffect, useState } from 'react'
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { useSwipeable } from "react-swipeable";

const BookSlider = () => {

    const images = [
        "https://images.pexels.com/photos/5531665/pexels-photo-5531665.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/18176577/pexels-photo-18176577/free-photo-of-fish-decoration-over-books-in-bookstore.jpeg?auto=compress&cs=tinysrgb&w=600"

        , "https://images.pexels.com/photos/2556018/pexels-photo-2556018.jpeg?auto=compress&cs=tinysrgb&w=600"]

    const [currentImageInd, setCurrentImageInd] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(true);
    const [showRightArrow, setShowRightArrow] = useState(true);

    useEffect(() => {
     const interval = setInterval(() => {
            setCurrentImageInd((prev)=> (prev + 1) % images.length);
        }, 3000)

        return () => clearInterval(interval)
    }, [images.length])

    const handlePrevSlide = () => {
        setShowRightArrow(true)
        currentImageInd > 0 ? setCurrentImageInd(prev => prev - 1) : setShowLeftArrow(false);
    }

    const handleNextSlide = () => {
        setShowLeftArrow(true)
        currentImageInd < images.length - 1 ? setCurrentImageInd(prev => prev + 1) : setShowRightArrow(false);
    }

    const handleCicleToggle = (index) => {
        setCurrentImageInd(index);
        setShowLeftArrow(true);
        setShowRightArrow(true);
    }

    const handlers = useSwipeable({
        onSwipedLeft: handleNextSlide,
        onSwipedRight: handlePrevSlide,
        preventDefaultTouchmoveEvent: true,
    })

    return (
        <div className='mx-10 lg:mx-20 mt-28 flex flex-col items-center mb-20'>
            <div className='flex items-center w-full' {...handlers}>
                {
                    showLeftArrow && (
                        <span onClick={handlePrevSlide}
                            className='bg-white text-black absolute hidden sm:block left-4 lg:left-16 p-2 rounded-full text-3xl cursor-pointer'>
                            <IoMdArrowBack />
                        </span>)
                }
                {
                    images.map((image, index) => (

                        currentImageInd === index ?
                            <img key={index} src={image} alt={`Slide ${index}`} className='w-full h-120 rounded-lg transition-opacity duration-700 ease-in-out' />
                            : null

                    ))
                }
                {
                    showRightArrow && (
                        <span onClick={handleNextSlide}
                            className='bg-white text-black absolute hidden sm:block right-4 lg:right-16 p-2 rounded-full text-3xl cursor-pointer'>
                            <IoMdArrowForward />
                        </span>
                    )
                }
            </div>
            <div className='flex gap-2 mt-4'>{
                images.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 border rounded-full border-gray-400 cursor-pointer transition-colors duration-300 ease-in-out ${currentImageInd === index ? 'bg-gray-800' : 'bg-transparent'}`}
                        onClick={() => handleCicleToggle(index)}></span>
                ))}
            </div>
        </div>
    )
}

export default BookSlider