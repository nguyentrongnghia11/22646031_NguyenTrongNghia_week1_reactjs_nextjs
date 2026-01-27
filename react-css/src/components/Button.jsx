import React from 'react';
import './Button.css';

const Button = ({ type = 'primary', children, ...props }) => {
  return (
    <button className={`btn btn-${type}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
