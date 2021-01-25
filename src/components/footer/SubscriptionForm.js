import React from 'react';
import { FiSend } from 'react-icons/fi';

import { useToasts } from 'react-toast-notifications';

export default function SubscriptionForm() {
  const { addToast } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = 'Thank you for subscribing!';
    addToast(content, {
      appearance: 'success',
      autoDismiss: true,
    });
  };

  return (
    <>
      <form className="subscription-form" onSubmit={handleSubmit}>
        <input
          type="email"
          required="true"
          className="subscription-form__input-field"
          placeholder="Je e-mailadres"
        />
        <button className="subscription-form__subscribe-button">
          <FiSend className="subscription-form__icon" />
        </button>
      </form>
    </>
  );
}
