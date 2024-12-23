import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [all_product, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch("https://tinbu-proxy-server.vercel.app/products")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
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
      
          if (existingItem.quantity <= quantity) {
            // Remove the item if the quantity becomes zero or less
            updatedCartItems = cartItems.filter(item => item.id !== product.id);
          } else {
            // Update the quantity if it's greater than the quantity to be removed
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
