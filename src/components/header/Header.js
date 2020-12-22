import React from 'react';
import './style.css';
import SearchBar from './SearchBar';
import logo from '../../assets/logo.png';
import { FiUser, FiShoppingCart, FiCheckCircle } from 'react-icons/fi';

export default function Header() {
  return (
    <>
      <div className="top-header">
        <span>
          <FiCheckCircle /> Free shipping
        </span>
        <span>
          <FiCheckCircle /> Quick delivery
        </span>
        <span>
          <FiCheckCircle /> Free return
        </span>
      </div>

      <div className="header">
        <div className="header__logo">
          <img src={logo} alt=""></img>
        </div>
        <div className="header__search">
          <SearchBar />
        </div>
        <div className="header__right">
          <FiUser className="header__icon" />
          <FiShoppingCart className="header__icon" />
          <div className="header__right-counter">
            <span>10</span>
          </div>
        </div>
      </div>
    </>
  );
}
