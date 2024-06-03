import React from 'react';
import './Contact2.css'; // Import the CSS file

const Contact2 = () => {
  return (
    <button>
      <a href="tel:+1234567890">
        <svg viewBox="0 0 16 16" fill="currentColor" id="phone">
          <path d="M3.654 1.328a.678.678 0 00-1.015-.072L1.605 2.29c-.483.483-.661 1.193-.453 1.768a15.899 15.899 0 003.285 5.21 15.898 15.898 0 005.209 3.285c.575.208 1.285.03 1.768-.453l1.034-1.034a.678.678 0 00-.072-1.015l-2.287-1.526a.678.678 0 00-.645-.097l-1.16.466a.678.678 0 01-.741-.17L6.322 8.18a.678.678 0 01-.17-.74l.466-1.16a.678.678 0 00-.097-.646L3.654 1.328z"></path>
        </svg>
      </a>
    </button>
  );
};

export default Contact2;
