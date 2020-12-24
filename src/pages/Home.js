import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/product-card';
import axios from 'axios';

import './style.css';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/shoes')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
