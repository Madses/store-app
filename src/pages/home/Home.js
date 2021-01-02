import React, { useState } from 'react';
import { useProducts } from '../../hooks';
import ProductCard from './ProductCard';
import euFlag from '../../assets/euFlag.png';
import usaFlag from '../../assets/usaFlag.png';

import './style.scss';

export default function Home() {
  const { products } = useProducts();
  const [sizeChart, setSizeChart] = useState('eu');

  return (
    <>
      <div className="size-chart">
        <span>size chart:</span>
        <div className="size-chart__flags">
          <img
            src={euFlag}
            className="size-chart__eu-flag"
            alt=""
            onClick={() => {
              setSizeChart('eu');
            }}
          ></img>
          <img
            src={usaFlag}
            className="size-chart__eu-flag"
            alt=""
            onClick={() => {
              setSizeChart('us');
            }}
          ></img>
        </div>
      </div>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            sizeChart={sizeChart}
          />
        ))}
      </div>
    </>
  );
}
