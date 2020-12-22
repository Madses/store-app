import React from 'react';
import './style.css';
import SearchBar from './SearchBar';
import logo from '../../assets/logo.png';

import {
  FiUser,
  FiShoppingCart,
  FiTwitter,
  FiFacebook,
  FiLinkedin,
} from 'react-icons/fi';

export default function Header() {
  return (
    <>
      <div className="top-header">
        <span>+31 6 - 4002 7862 | k.l.m.aartsen@hotmail.com</span>

        <div className="top-header__socials">
          <FiTwitter className="top-header__social-icon" />
          <FiFacebook className="top-header__social-icon" />
          <FiLinkedin className="top-header__social-icon" />
        </div>
      </div>

      {/* <div className="header">
        <div className="header__logo-container">
          <img className="header__logo" src={logo} alt="" />
        </div>

        <div className="header__search-container">
          <SearchBar className="header__search-bar" />
        </div>

        <div className="header__links-container">
          <div className="header__sign-up">
            <FiUser className="header__user-icon" />
            <span>Aanmelden</span>
          </div>

          <div className="header__cart">
            <FiShoppingCart className="header__cart-icon" />
            <div className="header__cart-count">10</div>
          </div>
        </div>
      </div> */}

      <div className="header">
        <div className="header__logo">
          <img src={logo} alt=""></img>
        </div>
        <div className="header__search">
          <SearchBar />
        </div>
        <div className="header__links">
          <FiUser className="header__icon" /> <span>Aanmelden</span>
          <FiShoppingCart className="header__icon" />
          <div className="header__links-counter">
            <span>10</span>
          </div>
        </div>
      </div>
    </>
  );
}
