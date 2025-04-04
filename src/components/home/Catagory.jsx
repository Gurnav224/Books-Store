import React, { useEffect, useState } from 'react'

const Catagory = () => {

const [categories, setCategories] = useState(null);

useEffect(() => {

  const fetchData = async () => {
    const response = await fetch("https://2cdf-43-230-197-1.ngrok-free.app/categories");
    setCategories(await response?.json());
    console.log(categories);
  }

  fetchData();

}, [])

  return (
    <div>
      <div className='flex flex-col items-center gap-8 mb-20 mx-20'>
        <h2 className='text-2xl font-semibold'>Category</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          {
            categories?.map((category) => (
              <div key={category._id} className='w-full flex flex-col shadow-xl shadow-gray-200 rounded-lg'>
                <img src={category.img} alt="" className='w-full h-96 rounded-lg' />
                <p className='text-2xl mx-auto py-4'>{category.category}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Catagory