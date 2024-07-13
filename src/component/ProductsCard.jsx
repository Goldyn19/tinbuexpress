import React from 'react'
import { useNavigate } from "react-router-dom";
import default_image from '../assets/images/default-product.jpg'

const ProductsCard = ({  productName, colours, product }) => {
  const productid = product.id
    const navigate = useNavigate();
    const handleViewAllClick = () => {
        navigate(`/product/${productid}`); 
      };
      const price = product.current_price && product.current_price[0] && product.current_price[0].NGN && product.current_price[0].NGN[0] ? product.current_price[0].NGN[0] : 'Price not available';
      const baseUrl = 'https://api.timbu.cloud/images/';
    const imageUrl = product.photos && product.photos[0] && product.photos[0].url ? baseUrl + product.photos[0].url : default_image; // Provide a default image if not available
      
   
  return (
    <div className="mb-4 product-wap rounded-0 shadow-md">
    <div className="rounded-0 relative">
      <img
        className="rounded-0  img-fluid w-full"
        src={imageUrl}
        alt={productName}
      />
      <div className="card-img-overlay rounded-0 product-overlay flex flex-col items-center justify-center px-5 absolute  inset-0 text-white bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 hover:opacity-100">
      <h1 className='text-specials-large '>{product.name}</h1>
      <h1 className='specials-medium text-justify '>This is the 1996 Alica Keys Photo frame for Night tour Designed with a golden plate edge and a stand.</h1>
      <button className="border border-cool-grey text-white text-label-medium p-5 rounded-md hover:bg-verdigris" onClick={handleViewAllClick}>
                View All
        </button>
      </div>
    </div>
    <div className="card-body px-3">
      <h1
       
        className="block text-product-card mt-5"
      >
        {product.name}
      </h1>
      <div className="w-full list-unstyled flex mt-2 mb-0">
      {colours.map((color, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-full flex items-center justify-center mx-2 text-white font-bold"
            style={{ backgroundColor: color }}
          >
            
          </div>
        ))}
      </div>
     
      <p className=" text-headline-small py-5 mb-0"> {price}$</p>
    </div>
  </div>
  )
}

export default ProductsCard
