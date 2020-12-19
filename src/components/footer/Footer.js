import React from 'react';
import SubscriptionForm from './SubscriptionForm';
import './style.css';
import { FiPhone , FiMail , FiFacebook,FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__contact">
        <span>Contact us</span>
        <p><FiMail/> k.l.m.aartsen@hotmail.com</p>
        <p><FiPhone/> +31 6 - 4002 7862</p>  
      </div>
      <div className="footer-container__subscription-form">
        <span>Subscribe and never miss a release</span>
        <SubscriptionForm />
      </div>
      <div className="footer-container__socials">
        <span>Follow us</span>
        <div className="footer-container__social-icons">
          <div><p><FiFacebook/></p></div>
         <div><p><FiTwitter/></p></div>
         <div><p><FiLinkedin/></p></div>
        </div>
      </div>
    </div>
  );
}
