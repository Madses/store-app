import React from 'react';
import './style.css';
export default function ProductCard({ image, condition, name, size, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <div className="product-card__content">
        <p className="product-card__product-state">{condition}</p>
        <p className="product-card__product-name">{name}</p>
        <p className="product-card__product-size">Size: {size}</p>
        <p className="product-card__product-price">${price}</p>
      </div>
    </div>
  );
}
