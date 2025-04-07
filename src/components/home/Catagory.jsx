import React, { useEffect, useState } from 'react'
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

const Category = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [categories, setCategories] = useState([]);

  const [currentDataToShow, setCurrentDataToShow] = useState(categories.slice(currentIndex, currentIndex + visibleCount));

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('https://book-store-backend-red.vercel.app/categories');
      const data = await response.json(); 
      setCategories(data);
      } catch(error){
        console.error("Error fetching data:", error);
      }
    }
    fetchData();

  }, []);

  useEffect(() => {

    const updateVisibleItems = () => {
      setVisibleCount(3);

      if (window.innerWidth < 640) setVisibleCount(1);

      if (window.innerWidth < 768) setVisibleCount(2);
    }

    updateVisibleItems();

    window.addEventListener('resize', updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);

  }, [currentIndex, visibleCount]);

  useEffect(() => {
    setCurrentDataToShow(categories.slice(currentIndex, currentIndex + visibleCount));
  }, [currentIndex, visibleCount, categories]);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + visibleCount < categories.length) ? prevIndex + 1 : 0);
  }

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0) ? categories.length - visibleCount : prevIndex - 1);
  }

  return (
    <div className='flex flex-col items-center gap-10 my-40 mx-5 sm:mx-10 lg:mx-20'>
      <h1 className='font-semibold text-3xl'>Category</h1>

      <div className='flex flex-col items-center rounded-lg flex-wrap'>

        <div className='flex gap-16 mx-0'>
          {
            currentDataToShow.map((item) => (
              <div key={item._id}
                className='flex flex-col items-center bg-gray-100 my-10 md:px-2 lg:px-5 rounded-lg shadow-md gap-10 pt-0 py-2 sm:py-4 lg:py-5 w-full'>
                <div className='flex flex-col gap-2 items-center'>
                  <img src={item.img} alt={item.category} className='rounded object-cover w-80 h-80' />
                  <h2 className='font-semibold text-gray-700'>{item.category}</h2>
                </div>
                <p className='px-4 lg:px-12 text-center text-gray-600 text-xs sm:text-sm lg:text-lg'>{item.comment}</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center justify-center gap-2 lg:gap-5'>
          <span onClick={handlePrev}
            className='bg-gray-100 text-black p-2 rounded-full text-2xl cursor-pointer'>
            <IoMdArrowBack />
          </span>
          <span onClick={handleNext}
            className='bg-gray-100 text-black p-2 rounded-full text-2xl cursor-pointer'>
            <IoMdArrowForward />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Category;