import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { ProductProvider, CartProvider } from '../../contexts';

describe('<Header/>', () => {
  it('renders', () => {
    const { queryByTestId } = render(
      <ProductProvider>
        <CartProvider>
          <Header />
        </CartProvider>
      </ProductProvider>
    );
    expect(queryByTestId('header-test')).toBeTruthy();
  });
});
