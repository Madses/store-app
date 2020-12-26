import React, { useState } from 'react';
import { FiShoppingCart, FiX } from 'react-icons/fi';
import { useCart } from '../../hooks';

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, cart, removeFromCart } = useCart();

  const subTotal = cart.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return (
    <div className="cart">
      <FiShoppingCart
        className="cart__icon"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <div className="cart__count">
        <span>{cartCount}</span>
      </div>

      {isOpen ? (
        <div className="cart__content">
          {!cart.length ? (
            <h2>Cart is empty...</h2>
          ) : (
            <>
              {cart.map((item) => (
                <div className="cart__content-item">
                  <img src={item.img} alt=""></img>
                  <span className="cart__content-item-price">
                    ${item.price}
                  </span>
                  <span className="cart__content-item-name">{item.name}</span>
                  <FiX
                    className="cart__content-item-delete"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  />
                </div>
              ))}

              <div className="cart__content-summary">
                <span className="cart__content-summary-name">SUB TOTAL</span>
                <span className="cart__content-summary-price">${subTotal}</span>
              </div>
              <div className="cart__content-checkout-button">
                PROCEED TO CHECKOUT
              </div>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}