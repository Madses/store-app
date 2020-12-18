import React from 'react';
import SubscriptionForm from './SubscriptionForm';
import './style.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__contact">
        <span>Contact us</span>
      </div>
      <div className="footer-container__subscription-form">
        <span>Subscribe and never miss a release</span>
        <SubscriptionForm />
      </div>
      <div className="footer-container__socials">
        <span>Follow us</span>
      </div>
    </div>
  );
}
