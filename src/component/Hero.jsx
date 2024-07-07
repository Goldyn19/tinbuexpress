import React from "react";
import pic1 from "../assets/images/hero.jpeg";

const Hero = () => {
  return (
    <div className="h-[700px]  bg-cover relative  bg-center " style={{ backgroundImage: `url(${pic1})` }}>
      <div className="grid md:grid-cols-6 absolute md:right-0 right-10 w-full bottom-0 mb-20 ">
        <div className="bg-french-grey opacity-90  col-start-4 col-span-2 pt-5 rounded-md pb-8">
           
            <div className=" ">
         <div className="text-body-small md:px-4 pl-8">
            <h1>New Arrival</h1>
          </div>
          <div className="text-title-large text-verdigris md:pl-4 pl-8 pt-2 w-full ">
            <h1 className="max-w-[]"> Discorver Our </h1>
            <h1>New Collection</h1>
           
          </div>
          <div className="text-body-small md:px-4 pl-8 pt-2">
            <h1>Cheaper than you ever expect</h1>
          </div>
          <button className="bg-verdigris text-white text-label-medium md:ml-4 ml-8 mt-5 p-5 rounded-md">
            Add to Cart
          </button>
        
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
