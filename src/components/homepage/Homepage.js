import React from 'react'
//import Header from '../components/Header/Header'
import About from '../UI/About'
import Blog from '../UI/Blog'
import Counter from '../UI/Counter'
import Hero from '../UI/Hero'
import Services from '../UI/Services'
import Team from '../UI/Team'
import Testimonial from '../UI/Testimonial'
import {useState, useEffect} from 'react';

const Homepage = () => {
  const [theme] = useState('')

  useEffect(() => {
    window.scrollTo(0,0)
    document.body.className = theme
  }, [theme])

  return (
    <div>
      <Hero theme={theme} />
      <Counter/>
      <Services/>
      <About/>
      <Team/>
      <Blog/>
      <Testimonial/>
    </div>
  )
}

export default Homepage
