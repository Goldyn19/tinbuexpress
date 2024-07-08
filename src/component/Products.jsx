import React, {useState} from 'react'
import ProductsCard from './ProductsCard'
import DropDowns from './DropDowns'
import FilterIcon from '../assets/icons/FilterIcon'
import pic1 from '../assets/images/product1.png'
import pic2 from '../assets/images/product2.png'
import pic3 from '../assets/images/product3.png'
import pic4 from '../assets/images/product4.png'
import pic5 from '../assets/images/product5.png'
import pic6 from '../assets/images/product6.png'
import pic7 from '../assets/images/product7.png'
import pic8 from '../assets/images/product8.png'
import pic9 from '../assets/images/product9.png'
import pic10 from '../assets/images/product10.png'
import pic11 from '../assets/images/product11.png'
import pic12 from '../assets/images/product12.png'

const Products = () => {
    const [open, setOpen] = useState(false);
    const bedroomMenu = [
        { label: 'Duvet Cover Sets', href: '#' },
        { label: 'Sheets', href: '#' },
        { label: 'Bedspreads & Blankets', href: '#' },
        { label: 'Blankets', href: '#' },
        { label: 'Curtains', href: '#' },
        { label: 'Pillowcases', href: '#' },
        { label: 'Rugs', href: '#' },
       
    ]
    const livingroomMenu = [
        { label: 'Duvet Cover Sets', href: '#' },
        { label: 'Sheets', href: '#' },
        { label: 'Bedspreads & Blankets', href: '#' },
        { label: 'Blankets', href: '#' },
        { label: 'Curtains', href: '#' },
        { label: 'Pillowcases', href: '#' },
        { label: 'Rugs', href: '#' },
       
    ]
    const childroomMenu = [
        { label: 'Duvet Cover Sets', href: '#' },
        { label: 'Sheets', href: '#' },
        { label: 'Bedspreads & Blankets', href: '#' },
        { label: 'Blankets', href: '#' },
        { label: 'Curtains', href: '#' },
        { label: 'Pillowcases', href: '#' },
        { label: 'Rugs', href: '#' },
       
    ]
    const bathroomMenu = [
        { label: 'Duvet Cover Sets', href: '#' },
        { label: 'Sheets', href: '#' },
        { label: 'Bedspreads & Blankets', href: '#' },
        { label: 'Blankets', href: '#' },
        { label: 'Curtains', href: '#' },
        { label: 'Pillowcases', href: '#' },
        { label: 'Rugs', href: '#' },
       
    ]
    const outdoorMenu = [
        { label: 'Duvet Cover Sets', href: '#' },
        { label: 'Sheets', href: '#' },
        { label: 'Bedspreads & Blankets', href: '#' },
        { label: 'Blankets', href: '#' },
        { label: 'Curtains', href: '#' },
        { label: 'Pillowcases', href: '#' },
        { label: 'Rugs', href: '#' },
       
    ]
  return (
    <div className='mx-5 '>
        <div className='flex justify-center text-headline-small'>
            <h1 className='mx-auto'>Our Product</h1>
        </div>
      <div className='md:flex  mx-auto mt-5'>
        <div className='md:w-1/5 w-full' >
            <div className='flex  md:hidden cursor-pointer'onClick={() => setOpen(!open)}>
                <span className='w-fit'><FilterIcon/></span>
                <span>Filter & Sort</span>
                </div>
           <div className={`${open ? 'block': 'hidden'} md:block`}>
           <h1 className=' text-headline-small'>New Arrivals</h1>
            <h1>New Arrivals</h1>

           <div className='ml-8'>
           <h1 className=' text-headline-small mt-8 '>Shop by room</h1>
           <DropDowns label="Bedroom" options={bedroomMenu} />
           <DropDowns label="Living Room" options={livingroomMenu} />
           <DropDowns label="Child Room" options={childroomMenu} />
           <DropDowns label="Bathroom" options={bathroomMenu} />
           <DropDowns label="Outdoor" options={outdoorMenu} />
           
            <h1 className=' text-headline-small mt-8 '>Shop by Concept</h1>
            <h1 className=' text-body-large'>Conscious</h1>
            <h1 className=' text-body-large'>Premium Quality</h1>
            <h1 className='text-body-large'>Classic Collection</h1>

            <h1 className=' text-headline-small mt-8 '>Price</h1>
            <div class="flex items-center space-x-2">
                <input id="checkbox" type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                <label for="checkbox" class="text-body-large text-gray-700">0$ - 40$</label>
            </div>
            <div class="flex items-center space-x-2">
                <input id="checkbox" type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                <label for="checkbox" class="text-body-large text-gray-700">40$ - 100$</label>
            </div>
            <div class="flex items-center space-x-2">
                <input id="checkbox" type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                <label for="checkbox" class="text-body-large text-gray-700">100$ - 150$</label>
            </div>
            <div class="flex items-center space-x-2">
                <input id="checkbox" type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                <label for="checkbox" class="text-body-large text-gray-700">150$ - 175$</label>
            </div>
            <div class="flex items-center space-x-2">
                <input id="checkbox" type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                <label for="checkbox" class="text-body-large text-gray-700">175$ - 250$</label>
            </div>
            <div class="flex items-center space-x-2">
                <input id="checkbox" type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                <label for="checkbox" class="text-body-large text-gray-700">250$ - 350$</label>
            </div>  
           </div>
           </div>
          
        </div>
        <div className='md:w-4/5 md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-4  pt-6'>
            <ProductsCard imgSrc={pic1} productName={'velvet Cover red'} price={'39'} colours={['#3AA39F', '#E14B4B']}/>
            <ProductsCard imgSrc={pic2}  productName={'candle in Glass Holder'} price={'14'} colours={['#3AA39F', '#E14B4B']}/>
            <ProductsCard imgSrc={pic3}  productName={'Metal Photo Frame'} price={'25'} colours={['#3AA39F', '#E14B4B']}/>
            <ProductsCard imgSrc={pic4}  productName={'Rounded Floor Mat'} price={'34'} colours={['#3AA39F', '#E14B4B']}/>
            <ProductsCard imgSrc={pic5}  productName={'class Light Holder'} price={'22'} colours={['#3AA39F', '#E14B4B']}/>
            <ProductsCard imgSrc={pic6}  productName={'Flannel Duvet Cover set'} price={'44'} colours={['#3AA39F', '#E14B4B']}/>
            <ProductsCard imgSrc={pic7}  productName={'Fitted Cotton sheet'} price={'24'} colours={['#3AA39F', '#E14B4B']}/>
            <ProductsCard imgSrc={pic8}  productName={'Small Candle in a Small Jar'} price={'14'} colours={['#3AA39F', '#E14B4B']}/>
            <ProductsCard imgSrc={pic9}  productName={'Checked Duvet Cover Set'} price={'24'} colours={['#3AA39F', '#E14B4B']}/>
            <ProductsCard imgSrc={pic10}  productName={'Washed Linen Pillowcase'} price={'18'} colours={['#3AA39F', '#E14B4B']}/>
            <ProductsCard imgSrc={pic11}  productName={'Ribbon wool-blend Throw'} price={'24'} colours={['#3AA39F', '#E14B4B']}/>
            <ProductsCard imgSrc={pic12}  productName={'Mini Procelain Dish'} price={'8'} colours={['#3AA39F', '#E14B4B']}/>

        </div>
      </div>
      <div className=' flex justify-center mx-auto mt-2 mb-20'>
      <button className='p-3 border border-verdigris rounded-md text-label-medium text-verdigris md:ml-[20%]'>
        Show More
      </button>
      </div>
    </div>
  )
}

export default Products
