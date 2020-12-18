import React from 'react';
import { FiSend } from 'react-icons/fi';

export default function SubscriptionForm() {
  return (
    <div>
      <form className="subscription-form">
        <input
          type="text"
          className="subscription-form__input-field"
          placeholder="Je e-mailadres"
        />

        <button className="subscription-form__subscribe-button">
          <FiSend className="subscription-form__icon" />
        </button>
      </form>
    </div>
  );
}
