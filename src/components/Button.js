import React from 'react';

const Button = ({ children, onClick, className, type, style }) => {
  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
