import React from 'react';
import './AnimatedButton2.css'; // Make sure to create and link this CSS file

const AnimatedButton2 = () => {
  return (
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Learn More</span>
    </button>
  );
};

export default AnimatedButton2;
