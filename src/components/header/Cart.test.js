import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cart from './Cart';
import { CartProvider } from '../../contexts';

describe('<Cart/>', () => {
  it('renders', () => {
    const { queryByTestId, debug } = render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );
    expect(queryByTestId('cart-test')).toBeTruthy();
  });

  it('Opens the cart content on click', () => {
    const { queryByTestId, debug } = render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    expect(queryByTestId('cart-content')).toBeFalsy();
    fireEvent.click(queryByTestId('cart-count'));
    expect(queryByTestId('cart-content')).toBeTruthy();
  });

  it('Shows default message when there are no products in cart', () => {
    const { queryByTestId, debug } = render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );
  });
});
