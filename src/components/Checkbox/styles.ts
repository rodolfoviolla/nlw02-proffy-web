import styled from 'styled-components';

interface CheckboxProps {
  checked: boolean;
}

const Input = styled.input``;

export const HiddenCheckbox = styled(Input).attrs<CheckboxProps>({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
  display: inline-block;
  position: relative;
  top: -0.1rem;
  width: 2.4rem;
  height: 2.4rem;
  margin: -0.1rem 0 0 0;
  vertical-align: middle;
  border: 1px solid var(--color-line-in-white);
  border-radius: 8px;
  background: ${props => props.checked ? 'var(--color-secundary)' : 'var(--color-box-footer)'};
  transition: all 200ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px var(--color-text-complement);
  }

  > img {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  
  > span {
    margin-left: 1.6rem;
  }
`;