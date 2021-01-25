import React from 'react';
import SubscriptionForm from './SubscriptionForm';
import './style.scss';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebook, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__contact">
        <h2>Contact us</h2>
        <p>
          <FiMail /> test@test.com
        </p>
        <p>
          <FiPhone /> +31 6 - 1222 - 123
        </p>
      </div>
      <div className="footer-container__subscription-form">
        <h2>Subscribe and never miss a release</h2>
        <SubscriptionForm />
      </div>
      <div className="footer-container__social">
        <h2>Follow us</h2>
        <div className="footer-container__social-icons">
          <FaFacebook className="footer-container__social-icon" />
          <FaTwitterSquare className="footer-container__social-icon" />
          <FaLinkedin className="footer-container__social-icon" />
        </div>
      </div>
    </div>
  );
}
