import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from './SearchBar';
import { ProductProvider } from '../../contexts';
import { useProducts } from '../../hooks';
jest.mock('../../hooks/useProducts');

describe('<SearchBar/>', () => {
  it('renders', () => {
    const { queryByTestId, debug } = render(
      <ProductProvider>
        <SearchBar />
      </ProductProvider>
    );
    expect(queryByTestId('search-bar')).toBeTruthy();
  });

  it('handles onChange event', () => {
    const { queryByTestId, debug } = render(
      <ProductProvider>
        <SearchBar />
      </ProductProvider>
    );

    const input = queryByTestId('searchbar-input');
    fireEvent.change(input, { target: { value: 'Air Jordan' } });
    expect(input.value).toBe('Air Jordan');
  });

  it('calls hook 300ms after user stops typing', async () => {
    const { queryByTestId } = render(
      <ProductProvider>
        <SearchBar />
      </ProductProvider>
    );

    const input = queryByTestId('searchbar-input');
    fireEvent.change(input, { target: { value: 'Air Jordan' } });
    expect(useProducts).not.toHaveBeenCalledWith('Air Jordan');

    await waitFor(
      () => expect(useProducts).toHaveBeenCalledWith('Air Jordan'),
      { timeout: 380 }
    );
    jest.clearAllMocks();
  });
});
