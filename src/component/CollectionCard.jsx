import React from 'react'

const CollectionCard = ({imgSrc, name}) => {
  return (
    <div className='mt-5'>
      <div className='rounded-md '>
        <img src={imgSrc}alt="" className='rounded-md  w-auto' />
      </div>
      <div className='flex justify-center mt-2 md:text-label-small text-[9px] text-headline-extrasmall'>
        <h1 className='mx-auto'>{name}</h1>
      </div>
    </div>
  )
}

export default CollectionCard
