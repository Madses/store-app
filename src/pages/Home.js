import React from 'react';
import { ProductCard } from '../components/product-card';
import { useProducts } from '../hooks';

import './style.css';

export default function Home() {
  const [products, setProducts] = useProducts();
  console.log(products);

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.img}
          condition={product.condition}
          name={product.name}
          size={product.sizeUs}
          price={product.price}
        />
      ))}
    </div>
  );
}
