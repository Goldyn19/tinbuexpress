import React from 'react'
import {  FaHeart, FaRegEye,FaCartPlus  } from "react-icons/fa";

const ProductsCard = ({ imgSrc, productName, colours,link, price }) => {
  return (
    <div className="mb-4 product-wap rounded-0 shadow-md">
    <div className="rounded-0 relative">
      <img
        className="rounded-0  img-fluid w-full"
        src={imgSrc}
        alt={productName}
      />
      <div className="card-img-overlay rounded-0 product-overlay flex items-center justify-center absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <ul className="list-unstyled">
          <li>
            <a className="btn  text-white" href={link}>
             <FaHeart className="bg-green-500 text-5xl mb-4 p-2 rounded-lg"/>
            </a>
          </li>
          <li>
            <a className="btn  text-white mt-2" href={link}>
              <FaRegEye className="bg-green-500 text-5xl mb-4 p-2 rounded-lg"/>
            </a>
          </li>
          <li>
            <a className="btn  text-white mt-2" href={link}>
              <FaCartPlus className="bg-green-500 text-5xl p-2 rounded-lg"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="card-body px-3">
      <a
        href={link}
        className="block text-product-card mt-5"
      >
        {productName}
      </a>
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
     
      <p className=" text-headline-small py-5 mb-0">{price}$</p>
    </div>
  </div>
  )
}

export default ProductsCard
