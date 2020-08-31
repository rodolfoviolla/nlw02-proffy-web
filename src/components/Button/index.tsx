import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ disabled, label, ...rest }) => {
  return (
    <Container
      type="submit"
      disabled={disabled}
      {...rest}
    >
      {label}
    </Container>
  );
}

export default Button;