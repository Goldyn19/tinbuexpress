import React from "react";
import FaceBookIcon from "../assets/icons/FaceBookIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import PintrestIcon from "../assets/icons/PintrestIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";

const Footer = () => {
  return (
    <div className="bg-[#323334] md:h-[447px]">
      <div className="md:grid md:grid-cols-3 md:mx-20 sm:mx-5">
        <div className="h-[242px] w-[312px] md:h-[264px] md:w-[221px] lg:h-[242px] lg:w-[312px]  mt-8">
          <div className="cursor-pointer flex items-center justify-center">
            <span className="text-headline-small mr-auto  text-verdigris">
              TinbuExpress
            </span>
          </div>
          <h1 className="text-cool-grey text-body-large mt-5">
            This is your best spot for aesthetic vintage furniture of all time
          </h1>
          <h1 className="text-specials-medium mt-5 text-white">123 HNG.ng Street, Nigeria</h1>
          <h1 className="text-specials-medium  text-white">+12 3 1234 1234</h1>
          <h1 className="text-specials-medium  text-white">contact@tinbuexpress.com</h1>

          <div className="mt-16 flex justify-between ">
            <FaceBookIcon/>
            <TwitterIcon/>
            <PintrestIcon/> 
            <InstagramIcon/>
          </div>
        </div>
        <div className="md:flex justify-between  mt-8" >
            <div className="w-[119px] lg:w-[120px] md:w-[122px] text-white">
                <h1 className="text-specials-medium md:mt-0 mt-20">Shopping</h1>
                <h1 className="mt-5 text-specials-small">Your Cart</h1>
                <h1 className="text-specials-small my-2">Your Orders</h1>
                <h1 className="text-specials-small my-2">Compared Items</h1>
                <h1 className="text-specials-small my-2">WishList Items</h1>
                <h1 className="text-specials-small my-2">Shipping Details</h1>
            </div>
            <div className="w-[119px] lg:w-[120px] md:w-[122px] text-white">
                <h1 className="text-specials-medium mt-20 md:mt-0">More link</h1>
                <h1 className="mt-5 text-specials-small my-2">Blog</h1>
                <h1 className="text-specials-small my-2">Gifts Center</h1>
                <h1 className="text-specials-small my-2">Buying Guides</h1>
                <h1 className="text-specials-small my-2">New Arrivals</h1>
                <h1 className="text-specials-small my-2">Clearance</h1>
            </div>
        </div>
        <div className="mt-8 flex flex-col relative md:ml-28 w-[312px]">
        <h1 className="text-specials-medium text-white ">From The Blog</h1>
        
            <h1 className="mt-5">
                <span className="text-cool-grey text-blog ">26</span>
                <span className="text-cool-grey text-body-medium"> May</span>
            </h1>
            <h1 className="text-white text-blog-medium">New collection drop by July 16, Get your notification on </h1>
            <h1 className="text-cool-grey text-body-medium mt-3">3 comments</h1>

            <hr className="bg-cool-grey my-2 mt-8 "/>

            <h1 className="mt-5">
                <span className="text-cool-grey text-blog ">26</span>
                <span className="text-cool-grey text-body-medium"> May</span>
            </h1>
            <h1 className="text-white text-blog-medium">New collection drop by July 16, Get your notification on </h1>
            <h1 className="text-cool-grey text-body-medium mt-3">3 comments</h1>


        </div>
      </div>
    </div>
  );
};

export default Footer;
