import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useProducts } from '../../hooks';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(query);
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  useProducts(debounced);

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
