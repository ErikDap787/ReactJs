import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (newItem) => {
        const existingItem = cartItems.find((item) => item.id === newItem.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;