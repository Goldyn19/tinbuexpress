import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PercentIcon from "../assets/icons/PercentIcon";
import CouponIcon from "../assets/icons/CouponIcon";
import pic1 from "../assets/images/cart1.png";
import pic2 from "../assets/images/singleproduct.png";

const Cart = () => {
    const navigate = useNavigate();
    const handleViewAllClick = () => {
        navigate("/address"); 
      };
  const [value, setValue] = useState(1);
  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const decrement = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 1));
  };
  return (
    <div className="md:flex justify-center mx-5">
      <div className="md:flex block">
        <div className="md:w-[620px] w-full">
          <h1>
            <span className="text-headline-medium">Cart</span>
            <span className="text-cool-grey text-title-small ml-3">
              2 items
            </span>
          </h1>
          <div className="flex mt-10 justify-between">
            <div className="flex relative">
              <img
                src={pic1}
                alt=""
                className="h-[160px] "
                style={{ aspectRatio: 2 / 3 }}
              />
              <div className="ml-5">
                <h1 className="text-title-small mb-3">Osmond Armchair</h1>
                <h1 className="mb-5">
                  <span className="text-cool-grey text-label-medium">
                    Color
                  </span>
                  <span className=" text-label-medium ml-5">
                    Gunnared biege
                  </span>
                </h1>
                <div className="text-title-small block md:hidden">$149.99</div>
                <div className="flex absolute bottom-0 md:mb-5 ">
                  <div className="flex h-[50px] items-center  border border-cool-grey rounded-md text-title-small w-fit">
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
                  <button className="bg-white h-[50px] text-imperial-red text-label-medium  px-5  rounded-md">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="text-title-small hidden md:block">$149.99</div>
          </div>
          <hr className="my-5" />
          <div className="flex mt-2 mb-10 md:justify-between">
            <div className="flex relative">
              <img
                src={pic2}
                alt=""
                className="h-[160px] "
                style={{ aspectRatio: 2 / 3 }}
              />
              <div className="ml-5">
                <h1 className="text-title-small mb-3">Meryl Lounge Chair</h1>
                <h1 className="mb-5">
                  <span className="text-cool-grey text-label-medium">
                    Color
                  </span>
                  <span className=" text-label-medium ml-5">
                    Lysed bright green
                  </span>
                </h1>
                <div className="text-title-small block md:hidden">$169.99</div>
                <div className="flex absolute bottom-0 md:mb-5 ">
                  <div className="flex h-[50px] items-center  border border-cool-grey rounded-md text-title-small w-fit">
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
                  <button className="bg-white h-[50px] text-imperial-red text-label-medium  px-5  rounded-md">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="text-title-small hidden md:block">$169.99</div>
          </div>
          <div className="flex  bg-[#3AA39F1A] mt-10 py-4 px-2 border border-verdigris ">
            <PercentIcon />
            <h1 className="text-body-large ml-1">
              10% Instant Discount with Federal Bank Debit Cards on a min spend
              of $150. TCA
            </h1>
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
          <button className="bg-verdigris text-white text-label-medium w-full my-3  p-5 rounded-md" onClick={handleViewAllClick}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
