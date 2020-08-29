import React, { InputHTMLAttributes, useState, useEffect, useRef } from 'react';

import passwordSeeImg from '../../assets/images/icons/password-see.svg';
import passwordUnseeImg from '../../assets/images/icons/password-unsee.svg';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholderStyle?: 'always' | 'never' | 'default';
}

const Input:React.FC<InputProps> = ({
  name, 
  label,
  type = 'text',
  placeholder,
  placeholderStyle = 'default',
  value,
  onChange,
  ...rest 
}) => {
  const [inputType, setInputType] = useState(type);
  const [spanClassName, setSpanClassName] = useState('unselectable');
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      setIsFilled(inputRef.current.value.length > 0);
    }
  }, [value]);

  useEffect(() => {
    setSpanClassName(
      `unselectable 
      ${placeholderStyle} 
      ${isSelected ? 'selected' : 'unselected'} 
      ${isFilled ? 'filled' : 'unfilled'}`
    );
  }, [placeholderStyle, isSelected, isFilled]);

  useEffect(() => {
    if (name === 'password' && !isVisible) {
      setInputType('password');
    } else {
      setInputType(type);
    }
  }, [type, isVisible, name]);

  function toggleVisibility() {
    setIsVisible(!isVisible);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function handleIsSelected(isFocus: boolean) {
    setIsSelected(isFocus);
  }

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      
      <input 
        {...rest}
        className={`placeholder-${placeholderStyle}`}
        id={name}
        type={inputType}
        placeholder=""
        ref={inputRef}
        value={value}
        onChange={onChange}
        onFocus={() => handleIsSelected(true)}
        onBlur={() => handleIsSelected(false)}
      />

      <span className={spanClassName} onClick={() => inputRef.current?.focus()} >
        {placeholder}
      </span>

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