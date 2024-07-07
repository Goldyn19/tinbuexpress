import React from 'react'
import pic1 from '../assets/images/specials.png'
const Specials = () => {
  return (
    <div className="h-[500px] w-full  bg-cover relative  bg-left my-10 flex  items-center justify-center md:justify-normal " style={{ backgroundImage: `url(${pic1})` }}>
      <div className='bg-white opacity-90 w-[348px] flex  absolute md:left-28 mx-auto h-[224px] md:w-[314px] lg:h-[338px] lg:w-[545px]'>
        <div className='flex flex-col mx-auto my-auto justify-center  w-[347px] h-[224px] md:w-[314px] lg:h-[217px] lg:w-[312px]'>
            <h1 className='text-verdigris text-specials-large'>BEDSHEET SETS</h1>
            <h1>
                <span className='text-specials-large'>$50.00</span>
                <span className="line-through text-specials-medium">$220.00</span>
                </h1>
            <h1 className='text-specials-small'>Comfort, Fluffy, Cotton with set of 6 pillow case in different color set</h1>
            <button className='p-3 border mr-auto border-verdigris  text-label-medium text-verdigris'>
        Show More
      </button>
        </div>

      </div>
    </div>
  )
}

export default Specials
