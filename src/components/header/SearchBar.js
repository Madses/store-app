import React from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  return (
    <div className="search-form">
      <FiSearch className="search-form__icon" />
      <input
        type="text"
        className="search-form__input"
        placeholder="Zoeken naar merken of producten..."
      />
    </div>
  );
}
