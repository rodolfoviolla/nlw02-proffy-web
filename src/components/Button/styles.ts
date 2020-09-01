import styled, { css } from 'styled-components';

export const Container = styled.button`
  border: 0;
  /* margin: 4rem 0 12.8rem; */
  width: 35.2rem;
  height: 5.6rem;
  border-radius: 8px;
  font: 600 1.6rem Archivo;
  cursor: pointer;
  transition: all 0.4s;

  background-color: var(--color-secundary);
  color: var(--color-title-in-primary);

  &:hover {
    opacity: 0.6;
  }
  
  ${props => props.disabled && css`
    background: var(--color-disabled);
    color: var(--color-text-complement);
    cursor: default;

    &:hover {
      opacity: 1;
    }
  `}
`;