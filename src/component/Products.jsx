import React, {useState} from 'react'
import ProductsCard from './ProductsCard'
import DropDowns from './DropDowns'
import FilterIcon from '../assets/icons/FilterIcon'


const Products = ({products}) => {

    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Number of items per page
   
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

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);
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
        <div className='md:w-4/5 md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-4 pt-6'>
                    {currentItems?.map((item, i) => (
                        <ProductsCard key={i} product={item} colours={['#3AA39F', '#E14B4B']} />
                    )) || <p>Loading...</p>}
                </div>
      </div>
      <div className='flex justify-center mx-auto mt-2 mb-20'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`p-3 border ${index + 1 === currentPage ? 'border-verdigris bg-verdigris text-white' : 'border-verdigris text-verdigris'} rounded-md text-label-medium md:ml-2`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
    </div>
  )
}

export default Products
