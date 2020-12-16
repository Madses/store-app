import React from 'react';
import './style.css';
export default function ProductCard() {
  return (
    <div className="product-card">
      <img
        className="product-card__product-image"
        src="https://www.famousfootwear.com/productimages/shoes_ia32041.jpg?trim.threshold=105&width=630&height=480&paddingWidth=60"
        alt=""
      />
      <div className="product-card__content">
        <p className="product-card__product-state">New</p>
        <p className="product-card__product-name">OZWEEGO CELOX SHOES</p>
        <p className="product-card__product-size">Available sizes (us): 10</p>
        <p className="product-card__product-price">$400</p>
      </div>
    </div>
  );
}
