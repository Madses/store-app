import React from 'react';
import SubscriptionForm from './SubscriptionForm';
import './style.css';
import {
  FiPhone,
  FiMail,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
} from 'react-icons/fi';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__contact">
        <h2>Contact us</h2>
        <p>
          <FiMail /> k.l.m.aartsen@hotmail.com
        </p>
        <p>
          <FiPhone /> +31 6 - 4002 7862
        </p>
      </div>
      <div className="footer-container__subscription-form">
        <h2>Subscribe and never miss a release</h2>
        <SubscriptionForm />
      </div>
      <div className="footer-container__socials">
        <h2>Follow us</h2>
        <div className="footer-container__social-icons">
          <div>
            <p>
              <FiFacebook />
            </p>
          </div>
          <div>
            <p>
              <FiTwitter />
            </p>
          </div>
          <div>
            <p>
              <FiLinkedin />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
