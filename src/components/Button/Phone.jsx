import React from 'react';
import './Phone.css'; // Import the CSS file

const PhoneButton = () => {
  return (
    <button>
      <a href="mailto:contact@example.com">
        <svg viewBox="0 0 16 16" fill="currentColor" id="contact">
          <path d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l7 4.2 7-4.2V4a1 1 0 00-1-1H2zm13 2.383l-4.646 2.788L15 10.467V5.383zm-1 .234L8.354 9.42a.5.5 0 01-.708 0L2 5.617v4.85l4.646-2.787L14 10.467V5.617z"></path>
        </svg>
      </a>
    </button>
  );
};

export default PhoneButton;
