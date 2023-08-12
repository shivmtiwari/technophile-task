import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const updateLocalStorage = (updatedCartItems) => {
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const addToCart = (item) => {
    const existingitem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingitem) {
      alert('item is already added to cart');
      return;
    }

    const updatedCartItems = [...cartItems, { ...item, qnty: 1 }];
    updateLocalStorage(updatedCartItems);
  };

  const increaseqnty = (itemId) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        return { ...cartItem, qnty: cartItem.qnty + 1 };
      }
      return cartItem;
    });

    updateLocalStorage(updatedCartItems);
  };

  const decreaseqnty = (itemId) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId && cartItem.qnty > 1) {
        return { ...cartItem, qnty: cartItem.qnty - 1 };
      }
      return cartItem;
    });

    updateLocalStorage(updatedCartItems);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
    updateLocalStorage(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const getTotalTimesAdded = () => {
    return cartItems.length;
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.qnty, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseqnty,
        decreaseqnty,
        removeFromCart,
        clearCart,
        getTotalTimesAdded,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
