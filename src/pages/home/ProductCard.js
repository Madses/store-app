import React from 'react';
import './style.scss';
import { useCart } from '../../hooks';

export default function ProductCard({ product, sizeChart }) {
  const { img, name, condition, sizeUs, price, sizeEu } = product;
  const { addToCart, cart, removeFromCart } = useCart();

  const inCart = (product) => {
    return !!cart.find((item) => item.id === product.id);
  };

  return (
    <div className="product-card">
      <img src={img} alt={name} />
      <div className="product-card__content">
        <p className="product-card__product-state">{condition}</p>
        <p className="product-card__product-name">{name}</p>
        <p className="product-card__product-size">
          Size: {sizeChart === 'us' ? `${sizeUs} US` : `${sizeEu} EU`}
        </p>
        <p className="product-card__product-price">${price}</p>
      </div>

      {inCart(product) ? (
        <button
          className="product-card__remove-from-cart-btn"
          onClick={() => {
            removeFromCart(product);
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="product-card__add-to-cart-btn"
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
