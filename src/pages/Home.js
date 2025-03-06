import React from 'react'
import { About, Amenities, Contact, Hero, Offer } from '../components'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Offer />
      <Amenities />
      <Contact />
    </div>
  )
}

export default Home