import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface ContainerProps {
  placeholderStyle: 'always' | 'never' | 'default';
  isSelected: boolean;
  isFilled: boolean;
  noLabel: boolean;
  inputStyles: FlattenSimpleInterpolation | undefined;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  ${({ placeholderStyle }) => placeholderStyle === 'always' && css`
    padding-top: 2rem;
  `}

  & + & {
    margin-top: 1.4rem;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  ${props => props.inputStyles}

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    background: var(--color-input-background);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Poppins;
    color: var(--color-text-base);

    ${props => props.placeholderStyle === 'always' && css`
      padding-top: 2.6rem;
    `}

    ${props => props.noLabel 
      ? css`
        margin: 0;
        height: 100%;
        border: 0;
        border-radius: inherit;
      `
      : css`
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        border: 1px solid var(--color-line-in-white);
      `
    }

    &[type=password]::-ms-reveal,
    &[type=password]::-ms-clear
    {
      display: none;
    }
  }

  span {
    position: absolute;
    left: 1.5rem;
    top: 32%;
    font-size: 1.6rem;
    color: var(--color-text-complement);
    transition: all 300ms;

    ${
      ({ placeholderStyle, isSelected, isFilled }) => 
        ((placeholderStyle === 'always' && isSelected) ||
        (placeholderStyle === 'always' && isFilled)) && css`
          position: absolute;
          left: 1.5rem;
          top: 20%;
          font-size: 1.2rem;
    `}

    ${
      ({ placeholderStyle, isFilled, isSelected }) => 
        ((placeholderStyle === 'never') ||
        (placeholderStyle === 'default' && isFilled) ||
        (placeholderStyle === 'default' && isSelected)) && css`
          display: none;
    `}
  }

  img {
    cursor: pointer;
    position: absolute;
    right: 2.7rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;