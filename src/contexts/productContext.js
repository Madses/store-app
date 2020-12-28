import React, { createContext, useState } from 'react';
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const values = [products, setProducts];

  return (
    <ProductContext.Provider value={values}>
      {props.children}
    </ProductContext.Provider>
  );
};
