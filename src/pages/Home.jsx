import React, {useContext} from 'react'
import Hero from '../component/Hero'
import Collection from '../component/Collection'
import Footer from '../component/Footer'
import Specials from '../component/Specials'
import Products from '../component/Products'
import { ShopContext } from '../context/ShopContext'


const Home = () => {
  const {all_product} = useContext(ShopContext)
  return (
    <div>
   
      <Hero/>
      <Collection/>
      <Products products={all_product}/>
      <Specials/>
      <Footer/>
    </div>
  )
}

export default Home
