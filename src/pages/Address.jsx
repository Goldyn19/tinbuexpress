import React from "react";
import { useNavigate } from "react-router-dom";
import CouponIcon from "../assets/icons/CouponIcon";
import DirectionRight from "../assets/icons/DirectionRight";


const Address = () => {
    const navigate = useNavigate();
    const handleViewAllClick = () => {
        navigate("/shipping"); 
    }
  return (
    <div className="md:flex justify-center mx-5 md:mt-20">
      <div className="md:flex block">
        <div className="md:w-[620px] w-full">
          <h1 className="flex space-x-8">
            <span className="text-headline-medium">Address</span>
            <span className="pt-4 ml-3">
              <DirectionRight />
            </span>
            <span className="text-cool-grey text-headline-medium ml-3">
              Shipping
            </span>
            <span className="pt-4 ml-3">
              <DirectionRight />
            </span>
            <span className="text-cool-grey text-headline-medium ml-3">
              Payment
            </span>
          </h1>

          <div className="mt-14">
            <div className="flex relative">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 mt-2"
              />
              <div className="ml-5">
                <div className=" flex ">
                  <h1 className="text-title-medium">HNG Nigeria</h1>
                  <button className="border border-verdigris px-2 py-1 ml-10 rounded-md text-verdigris">
                    Home
                  </button>
                </div>
                <h1 className="text-body-large mt-4">
                  1131 Online Meeting Way, Slack Street, Nigeria
                </h1>
                <h1 className="mt-2">
                  <span className="text-label-medium">contact</span>
                  <span className="text-body-large">-(234) 1234-1234</span>
                </h1>
              </div>
              <div className="absolute right-0 space-x-4">
                <button className="px-4 text-label-medium  border-r-2 ">Edit</button>
                <button className="px-2 text-label-medium text-imperial-red">Remove</button>
              </div>

            </div>
            <div className="flex mt-10 relative">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 mt-2"
              />
              <div className="ml-5">
                <div className=" flex ">
                  <h1 className="text-title-medium">Stage 2</h1>
                  <button className="border border-verdigris px-2 py-1 ml-10 rounded-md text-verdigris">
                    Office
                  </button>
                </div>
                <h1 className="text-body-large mt-4">
                  1234 Stage Two Junction, Along Figma Way, Nigeria
                </h1>
                <h1 className="mt-2">
                  <span className="text-label-medium">contact</span>
                  <span className="text-body-large">-(234) 1234-1234</span>
                </h1>
              </div>
              <div className="absolute right-0 space-x-4">
                <button className="px-4 text-label-medium  border-r-2 ">Edit</button>
                <button className="px-2 text-label-medium text-imperial-red">Remove</button>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-cool-grey py-5 md:mx-14 md:w-[380px] w-full">
          <h1 className="mx-5 text-headline-small mb-8">Order Summary</h1>
          <div className="mx-5 text-body-large">
            <div className="flex justify-between mb-5">
              <h1>Price</h1>
              <h1>$319.98</h1>
            </div>
            <div className="flex justify-between mb-5">
              <h1>Discount</h1>
              <h1>$31.9</h1>
            </div>
            <div className="flex justify-between mb-5">
              <h1>Shipping</h1>
              <h1 className="text-verdigris">Free</h1>
            </div>
            <div className="flex justify-between mb-8">
              <h1>Coupon Applied</h1>
              <h1>$319.98</h1>
            </div>
            <hr />
          </div>
          <div className="mx-5 text-body-large mt-10">
            <div className="flex justify-between mb-5">
              <h1>TOTAL</h1>
              <h1 className="text-label-medium">$228.08</h1>
            </div>
            <div className="flex justify-between mb-5">
              <h1>Estimated Delivered by</h1>
              <h1 className="text-label-medium">01 Jun, 2024</h1>
            </div>
          </div>
          <form class="max-w-md mx-5 border border-cool-grey ">
            <div class="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 text-body-large placeholder-cool-grey "
                placeholder="Coupon Code"
                required
              />
              <div className="absolute right-2.5 bottom-1/2 transform translate-y-1/2">
                <CouponIcon />
              </div>
            </div>
          </form>
          <div className="px-5">
            <button className="bg-verdigris text-white text-label-medium w-full my-3  p-5 rounded-md" onClick={handleViewAllClick}>
              Continue To Shipping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
