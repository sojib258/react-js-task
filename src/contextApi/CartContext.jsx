import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const CartContext = createContext();

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load the cart from localStorage, or default to an empty array if not found
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to increment the quantity of a product in the cart
  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrement the quantity of a product in the cart
  const decrementQuantity = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === productId);
  
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          return prevCart.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          // If the quantity is 1, remove the product from the cart
          return prevCart.filter(item => item.id !== productId);
        }
      } else {
        // If the product does not exist in the cart, return the cart as is
        return prevCart;
      }
    });
  };
  

  // Function to delete a product from the cart
  const deleteCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const cartLength = cart.length

  return (
    <CartContext.Provider value={{ cart, cartLength, addToCart, incrementQuantity, decrementQuantity, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);
