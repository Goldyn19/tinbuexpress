import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [all_product, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch("https://timbu-get-all-products.reavdev.workers.dev/?organization_id=ed17b6f6a2e548fe9992007acb2e909b&Appid=95VNIS2NW0FIA4L&Apikey=592e71e8195d45f5af3d132ce8293f1f20240712165554452277")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setAllProducts(data.items);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCartItems);
    }, []);

    useEffect(() => {
        const filteredCartItems = cartItems.filter(item => item.quantity > 0);
        localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
    }, [cartItems]);


    const addToCart = (product, quantity = 1) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            setCartItems(
                cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity }]);
        }
    };

    const removeFromCart = (product, quantity = 1) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            let updatedCartItems;

            if (existingItem.quantity === 1) {
                updatedCartItems = cartItems.filter(item => item.id !== product.id);
            } else {
                updatedCartItems = cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity - quantity } : item
                );
            }

            setCartItems(updatedCartItems);
        } else {
            console.error("Item not found in cart");
        }
    };

    const getTotalPrice = () => {
        const total = cartItems.reduce((total, item) => {
            const itemPrice = parseFloat(item.current_price);
            if (!isNaN(itemPrice)) {
                return total + itemPrice * item.quantity;
            }
            return total;
        }, 0);
        console.log(total);
        return total;
    };

    const contextValue = { all_product, setAllProducts, cartItems, addToCart, removeFromCart, getTotalPrice };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
