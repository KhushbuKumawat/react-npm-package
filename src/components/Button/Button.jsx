// src/components/Button/Button.jsx
import React from 'react';
// import './Button.module.css'; // If you're using component-specific styles

const Button = ({ children, ...props }) => {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
};

export default Button;
