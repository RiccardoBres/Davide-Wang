import React from 'react';

const CustomButton = ({ text, onClick, className, type }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

export default CustomButton;

{/*
 <CustomButton text="Clicca Qui" onClick={handleClick} className="custom-button-primary" />
 */}