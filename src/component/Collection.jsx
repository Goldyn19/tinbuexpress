import React from 'react'
import CollectionCard from './CollectionCard'
import pic1 from '../assets/images/collection1.png'
import pic2 from '../assets/images/collection2.png'
import pic3 from '../assets/images/collection3.png'
import pic4 from '../assets/images/collection4.png'
import pic5 from '../assets/images/collection5.png'
const Collection = () => {
  return (
    <div className='bg-white my-8'>
        <div className='flex text-headline-small justify-center '>
            <h1 className='mx-auto'>Browse Our Popular Collection</h1>
        </div>
        <div className='md:text-body-small text-[9px] text-headline-extrasmall flex justify-center'>
            <h1 className='mx-auto' >This is the most purchase product from our collections you don't wnat to miss out</h1>
        </div>
        <div className='flex gap-3 md:gap-8 ml-5'>
            <CollectionCard imgSrc={pic1} name={'Arc Duke Flur'}  />
            <CollectionCard imgSrc={pic2} name={'Fluffy Accent'}/>
            <CollectionCard imgSrc={pic3} name={'Emily'}/>
            <CollectionCard imgSrc={pic4} name={'Dracular Horn'}/>
            <CollectionCard imgSrc={pic5} name={'Antique Barrel'}/>

        </div>
    </div>
  )
}

export default Collection
