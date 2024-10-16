import React from 'react'
import Hero from '../../Components/Home/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import About from '../../Components/Home/About/About'
import NewsLetter from '../../Components/Home/NewsLetter/NewsLetter'
import ReviewsStudent from '../../Components/Home/ReviewsStudent/ReviewsStudent'
import QuickQuestion from '../../Components/Home/QuickQuestion/QuickQuestion'
import Footer from '../../Components/Footer/Footer'
import Coures from '../../Components/Home/Coures/Coures'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Coures />
      <NewsLetter />
      <ReviewsStudent />
      <QuickQuestion />
      <Footer />
    </>
  )
}
