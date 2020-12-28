import React from 'react';
import { useProducts } from '../../hooks';
import ProductCard from './ProductCard';

import './style.css';

export default function Home() {
  const { products } = useProducts();

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
