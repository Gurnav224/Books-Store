import React from 'react'
import Header from '../components/home/Header'
import BookSlider from '../components/home/BookSlider'
import Category from '../components/home/Catagory'
import Footer from '../components/home/Footer'
import Testimonials from '../components/home/Testimonials'

const Home = () => {
  return (
    <div>
        <Header />

       <BookSlider />

       <Category />

       <Testimonials />
       
       <Footer />
    </div>
  )
}

export default Home