import React from 'react'
import Hero from '../component/Hero'
import Collection from '../component/Collection'
import Footer from '../component/Footer'
import Specials from '../component/Specials'
import Products from '../component/Products'


const Home = () => {
  return (
    <div>
   
      <Hero/>
      <Collection/>
      <Products/>
      <Specials/>
      <Footer/>
    </div>
  )
}

export default Home
