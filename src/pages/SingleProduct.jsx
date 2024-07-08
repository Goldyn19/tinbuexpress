import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/icons/ArrowLeft";
import StarIcon from "../assets/icons/StarIcon";
import StarIconHalf from "../assets/icons/StarIconHalf";
import HeartIcon from "../assets/icons/HeartIcon";
import pic1 from "../assets/images/singleproduct.png";

const SingleProduct = () => {
    const navigate = useNavigate();
    const handleViewAllClick = () => {
        navigate("/cart"); 
      };
  const [value, setValue] = useState(1);
  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const decrement = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 1));
  };
  return (
    <div className="flex justify-center">
      <div className="container md:ml-24 mt-5 px-5 md:px-0">
        <div>
          <ArrowLeft />
        </div>
        <div className="mt-8">
          <h1>
            <span className="text-label-small opacity-40">Chair</span>
            <span className="text-label-smal mx-1">/</span>
            <span className="text-label-smal">Meryl lounge Chair</span>
          </h1>
        </div>
        <div className="md:flex mt-14 block ">
        <div className="order-1 md:order-2 md:ml-20">
            <img src={pic1} alt="" className="" />
          </div>
          <div className="order-2 md:order-1 ">
            <h1 className="text-headline-large">Merryl Lounge Chair</h1>
            <div className="flex justify-between mt-8">
              <h1 className="text-headline-small">$149</h1>
              <div className="flex align-bottom items-center">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIconHalf />
                <h1 className="text-body-large ml-2">
                  <span>4.6/5.0</span>
                  <span className="text-cool-grey ml-1">(556)</span>
                </h1>
              </div>
            </div>
            <div className="md:w-[440px] w-full mt-10">
              <h1 className="text-body-large">
                The gently curved lines accentuated by sewn details are kind to
                your body and pleasant to look at. Also, there's a tilt and
                height-adjusting mechanism that's built to outlast years of ups
                and downs.
              </h1>
            </div>
            <div className="flex my-8">
              <div className="w-4 h-4 rounded-full bg-[#C1BDB3] mx-2"></div>
              <div className="w-4 h-4 rounded-full bg-[#58737D] mx-2"></div>
              <div className="w-4 h-4 rounded-full bg-[#545454] mx-2"></div>
              <div className="w-4 h-4 rounded-full bg-[#CBA5A5] mx-2"></div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-auto items-center  border border-cool-grey rounded-md text-title-small w-fit">
                <button
                  onClick={decrement}
                  className="w-[20px]  text-center justify-center mb-1 ml-2 "
                >
                  -
                </button>
                <input
                  name="quantity"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="w-16 p-2  text-center focus:outline-none "
                />
                <button
                  onClick={increment}
                  className="w-[20px]  text-center mb-1 mr-2 "
                >
                  +
                </button>
              </div>
              <button className="bg-verdigris text-white text-label-medium   p-5 rounded-md" onClick={handleViewAllClick}>
                Add to Cart
              </button>
            </div>
            <h1 className="text-body-large mt-8">
             
                <span className="mr-2">Free 3-5 day shipping</span>
                <span className="mx-2">• Tool-free assembly </span>
                <span className="mx-2">• 30-day trial</span>
            </h1>
            <div className="flex gap-4 mt-10 cursor-pointer">
                <HeartIcon/>
                <h1 className="text-label-medium text-verdigris">Add to wishlist</h1>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
