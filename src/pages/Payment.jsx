import React from "react";
import { useNavigate } from "react-router-dom";
import CouponIcon from "../assets/icons/CouponIcon";
import DirectionRight from "../assets/icons/DirectionRight";
import MasterCardIcon from "../assets/icons/MasterCardIcon";

const Payment = () => {
  const navigate = useNavigate();
  const handleViewAllClick = () => {
    navigate("/payment");
  };
  return (
    <div className="lg:flex justify-center mx-5 md:mt-20 mt-5">
      <div className="lg:flex block">
        <div className="lg:w-[620px] w-full">
          <h1 className="flex md:space-x-8">
            <span className="text-cool-grey lg:text-headline-medium text-product-card">
              Address
            </span>
            <span className="lg:pt-4 pt-2 ml-3 ">
              <DirectionRight />
            </span>
            <span className="text-cool-grey lg:text-headline-medium text-product-card ml-3">
              Shipping
            </span>
            <span className="lg:pt-4 pt-2 ml-3">
              <DirectionRight />
            </span>
            <span className=" lg:text-headline-medium text-product-card ml-3">
              Payment
            </span>
          </h1>

          <div className="mt-14 mx-5">
            <h1 className="text-label-large">Shipping Method</h1>
            <table className="w-full mt-5 border border-cool-grey border-b-0">
              <tr className="flex justify-between text-center py-2 px-3 border-b border-cool-grey">
                <div className="flex">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 mt-1 mx-2"
                  />
                 <div className="md:flex block">
                 <div className="mx-3 text-label-medium flex align-bottom">
                    <MasterCardIcon />
                    <h1 className="ml-2">.... 5643</h1>
                  </div>
                  <h1 className="text-cool-grey mx-2 text-body-large">
                    Expires 09/2023
                  </h1>
                 </div>
                </div>
                <h1 className="mx-3 text-label-medium mt-3 md:mt-0 text-imperial-red">
                  Remove
                </h1>
              </tr>
              <tr className="flex justify-between text-center py-2 px-3 border-b border-cool-grey">
                <div className="flex">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 mt-1 mx-2"
                  />
                 <div className="md:flex block">
                 <div className="mx-3 text-label-medium flex align-bottom">
                    <MasterCardIcon />
                    <h1 className="ml-2">.... 6754</h1>
                  </div>
                  <h1 className="mx-2 text-body-large text-cool-grey">
                    Expires 11/2025
                  </h1>
                 </div>
                </div>
                <h1 className="mx-3 text-label-medium mt-3 md:mt-0 text-imperial-red">
                  Remove
                </h1>
              </tr>
            </table>
          </div>
        </div>

        <div className="border border-cool-grey py-5 lg:mx-14 lg:w-[380px] w-full lg:mt-0 mt-10">
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
            <button
              className="bg-verdigris text-white text-label-medium w-full my-3  p-5 rounded-md"
              onClick={handleViewAllClick}
            >
              Place Your Order and Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
