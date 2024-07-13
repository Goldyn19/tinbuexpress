import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PercentIcon from "../assets/icons/PercentIcon";
import CouponIcon from "../assets/icons/CouponIcon";
import CartItem from "../component/CartItem";
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, getTotalPrice  } = useContext(ShopContext);

  const handleViewAllClick = () => {
    navigate("/address");
  };

  const renderCartItems = () => {
    return Object.keys(cartItems).map((itemId) => (
      <CartItem key={itemId} item={cartItems[itemId]} removeFromCart={removeFromCart} />
    ));
  };

  return (
    <div className="lg:flex justify-center mx-5">
      <div className="lg:flex block">
        <div className="lg:w-[620px] w-full">
          <h1>
            <span className="text-headline-medium">Cart</span>
            <span className="text-cool-grey text-title-small ml-3">
              {Object.keys(cartItems).length} {Object.keys(cartItems).length === 1 ? "item" : "items"}
            </span>
          </h1>

          {Object.keys(cartItems).length > 0 ? (
            renderCartItems()
          ) : (
            <p>Your cart is empty.</p>
          )}

          <hr className="my-5" />
          <div className="flex bg-[#3AA39F1A] mt-10 py-4 px-2 border border-verdigris">
            <PercentIcon />
            <h1 className="text-body-large ml-1">
              10% Instant Discount with Federal Bank Debit Cards on a min spend
              of $150. TCA
            </h1>
          </div>
        </div>
        <div className="border border-cool-grey mt-5 lg:mt-0 py-5 lg:mx-14 lg:w-[380px] w-full">
          <h1 className="mx-5 text-headline-small mb-8">Order Summary</h1>
          <div className="mx-5 text-body-large">
            <div className="flex justify-between mb-5">
              <h1>Price</h1>
              <h1>${getTotalPrice().toFixed(2)}</h1>
            </div>
            <div className="flex justify-between mb-5">
              <h1>Discount</h1>
              <h1>$00.0</h1>
            </div>
            <div className="flex justify-between mb-5">
              <h1>Shipping</h1>
              <h1 className="text-verdigris">Free</h1>
            </div>
            <div className="flex justify-between mb-8">
              <h1>Coupon Applied</h1>
              <h1>$00.00</h1>
            </div>
            <hr />
          </div>
          <div className="mx-5 text-body-large mt-10">
            <div className="flex justify-between mb-5">
              <h1>TOTAL</h1>
              <h1 className="text-label-medium">${getTotalPrice().toFixed(2)}</h1>
            </div>
            <div className="flex justify-between mb-5">
              <h1>Estimated Delivered by</h1>
              <h1 className="text-label-medium">01 Jun, 2024</h1>
            </div>
          </div>
          <form className="max-w-md mx-5 border border-cool-grey">
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 text-body-large placeholder-cool-grey"
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
              className="bg-verdigris text-white text-label-medium w-full my-3 p-5 rounded-md"
              onClick={handleViewAllClick}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
