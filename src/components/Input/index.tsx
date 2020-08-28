import React, { InputHTMLAttributes, useState } from 'react';

import passwordSeeImg from '../../assets/images/icons/password-see.svg';
import passwordUnseeImg from '../../assets/images/icons/password-unsee.svg';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholderAlwaysVisible?: boolean;
}

const Input:React.FC<InputProps> = ({ name, label, placeholder, placeholderAlwaysVisible, ...rest }) => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input 
        type={
          name === 'password' && !isVisible ? name : 'text'
        } 
        {...rest} 
        id={name}
        placeholder=""
      />
      <span className="unselectable" >{placeholder}</span>
      {name === 'password' && 
        <img 
          onClick={toggleVisibility} 
          src={isVisible ? passwordUnseeImg : passwordSeeImg} 
          alt="Mostrar/Esconder senha"
        />
      }
    </div>
  );
}

export default Input;