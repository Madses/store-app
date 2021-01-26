import React, { useState, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import { BsBagFill } from 'react-icons/bs';

import { useCart, useOnClickOutside } from '../../hooks';

export default function Cart() {
  const cartRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeFromCart } = useCart();

  const subTotal = cart.reduce((acc, curr) => acc + curr.price, 0);
  const cartCount = cart.length;
  useOnClickOutside(cartRef, () => setIsOpen(false));

  return (
    <div className="cart" data-testid="cart-test">
      <BsBagFill
        className="cart__icon"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <div
        data-testid="cart-count"
        className="cart__count"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{cartCount}</span>
      </div>

      {isOpen ? (
        <div className="cart__content" data-testid="cart-content" ref={cartRef}>
          {!cart.length ? (
            <h2>Cart is empty...</h2>
          ) : (
            <>
              {cart.map((item) => (
                <div className="cart__content-item" key={item.id}>
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
                <span>SUB TOTAL</span>
                <span>${subTotal}</span>
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
