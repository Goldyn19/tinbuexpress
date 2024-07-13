import React, { useState } from 'react';
import default_image from '../assets/images/default-product.jpg';
import { useNavigate } from "react-router-dom";

const CartItem = ({ item, removeFromCart }) => {
    const baseUrl = 'https://api.timbu.cloud/images/';
    const imageUrl = item.photos && item.photos[0] && item.photos[0].url ? baseUrl + item.photos[0].url : default_image;

    const [value, setValue] = useState(item.quantity);
    console.log(item)

    const subTotal = item.quantity * item.current_price

    const increment = () => {
        setValue((prevValue) => prevValue + 1);
    };

    const decrement = () => {
        if (value > 1) {
            setValue((prevValue) => prevValue - 1);
        }
    };

    const navigate = useNavigate();

    const handleRemoveFromCart = () => {
        removeFromCart(item, value);
        navigate("/cart");
    };

    return (
        <div className="flex mt-10 justify-between">
            <div className="flex relative">
                <img
                    src={imageUrl}
                    alt={item.name}
                    className="h-[160px]"
                    style={{ aspectRatio: 2 / 3 }}
                />
                <div className="ml-5">
                    <h1 className="text-title-small mb-3">{item.name}</h1>
                    <h1 className="mb-5">
                        <span className="text-cool-grey text-label-medium">
                            Color
                        </span>
                        <span className="text-label-medium ml-5">
                            Gunnared beige
                        </span>
                    </h1>
                    <div className="text-title-small block md:hidden">${subTotal}</div>
                    <div className="flex absolute bottom-0 md:mb-5">
                        <div className="flex h-[50px] items-center border border-cool-grey rounded-md text-title-small w-fit">
                            <button
                                onClick={decrement}
                                className="w-[20px] text-center justify-center mb-1 ml-2"
                            >
                                -
                            </button>
                            <input
                                name="quantity"
                                value={value}
                                onChange={(e) => setValue(Number(e.target.value))}
                                className="w-16 p-2 text-center focus:outline-none"
                            />
                            <button
                                onClick={increment}
                                className="w-[20px] text-center mb-1 mr-2"
                            >
                                +
                            </button>
                        </div>
                        <button className="bg-white h-[50px] text-imperial-red text-label-medium px-5 rounded-md" onClick={handleRemoveFromCart}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-title-small hidden md:block">${subTotal}</div>
        </div>
    );
};

export default CartItem;
