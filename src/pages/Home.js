import React from 'react';
import { ProductCard } from '../components/product-card';
import './style.css';

export default function Home() {
  return (
    <div className="product-container">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
