import React, {  InputHTMLAttributes } from 'react';

import imgChecked from '../../assets/images/icons/checked.svg';

import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox:React.FC<CheckboxProps> = ({ label, checked, ...rest }) => {
  return (
    <CheckboxContainer className="unselectable">
      <HiddenCheckbox checked={checked} {...rest} />
      <StyledCheckbox checked={!!checked}>
        <img src={imgChecked} alt="Selecionado"/>
      </StyledCheckbox>
      <span>{label}</span>
    </CheckboxContainer>
  );
}

export default Checkbox;