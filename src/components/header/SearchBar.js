import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useProducts } from '../../hooks';
import axios from 'axios';

export default function SearchBar() {
  const { setProducts } = useProducts();
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(
      () =>
        axios
          .get(`/shoes?q=${query}`)
          .then((res) => {
            setProducts(res.data);
          })
          .catch((err) => {
            console.error(err);
          }),
      500
    );
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="search-form">
      <FiSearch className="search-form__icon" />
      <input
        type="text"
        className="search-form__input"
        placeholder="Search for brands or shoes..."
        onChange={handleChange}
      />
    </div>
  );
}
