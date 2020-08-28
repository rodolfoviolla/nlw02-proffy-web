import React, { useState, InputHTMLAttributes } from 'react';

import imgChecked from '../../assets/images/icons/checked.svg';

import './styles.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Checkbox:React.FC<CheckboxProps> = ({ name, label, ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleIsChecked() {
    setIsChecked(!isChecked);
  }

  return (
    <span id="container" onClick={handleIsChecked}>
      <input type="checkbox" name={name} checked={isChecked} {...rest} />
      <span>
        <img src={imgChecked} alt="Selecionado"/>
      </span>
      <label htmlFor={name}>{label}</label>
    </span>
  );
}

export default Checkbox;