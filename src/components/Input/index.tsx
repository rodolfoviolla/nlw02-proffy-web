import React, { InputHTMLAttributes, useState, useEffect, useRef, useCallback } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { useField } from '@unform/core';
import { isMobile } from 'react-device-detect';

import passwordSeeImg from '../../assets/images/icons/password-see.svg';
import passwordUnseeImg from '../../assets/images/icons/password-unsee.svg';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholderStyle?: 'always' | 'never' | 'default';
  inputStyles?: FlattenSimpleInterpolation;
}

const Input:React.FC<InputProps> = ({
  name, 
  label,
  type = 'text',
  placeholder,
  placeholderStyle = 'default',
  inputStyles,
  style,
  autoFocus,
  ...rest 
}) => {
  const { fieldName, defaultValue, registerField } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputType, setInputType] = useState(type);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    setInputType(
      (name === 'password' && !isPasswordVisible)
      ? 'password'
      : type
    );
  }, [type, isPasswordVisible, name]);

  const toggleVisibility = useCallback(() => {
    setIsPasswordVisible(oldVisible => !oldVisible);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleIsSelected = useCallback((isFocus: boolean) => {
    setIsSelected(isFocus);

    if (inputRef.current) {
      setIsFilled(inputRef.current.value.length > 0);
    }
  }, []);

  return (
    <Container 
      className="input-block"
      inputStyles={inputStyles}
      placeholderStyle={placeholderStyle}
      isFilled={isFilled}
      isSelected={isSelected}
      noLabel={!label}
      style={style}
    >
      <label htmlFor={name}>{label}</label>
      
      <input 
        {...rest}
        autoFocus={isMobile ? false : autoFocus}
        id={name}
        type={inputType}
        placeholder=""
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={() => handleIsSelected(true)}
        onBlur={() => handleIsSelected(false)}
      />

      <span onClick={() => inputRef.current?.focus()}>
        {placeholder}
      </span>

      {name === 'password' && 
        <img 
          onClick={toggleVisibility} 
          src={isPasswordVisible ? passwordUnseeImg : passwordSeeImg} 
          alt="Mostrar/Esconder senha"
        />
      }
    </Container>
  );
}

export default Input;