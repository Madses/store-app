import React, { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const values = [cart, setCart];

  return (
    <CartContext.Provider value={values}>{props.children}</CartContext.Provider>
  );
};
