import styled, { css, keyframes } from 'styled-components';

export const InputStyles = css`
  width: 35.2rem;
  height: 7.2rem;
  margin: 0;
  padding: 0;
  border: 1px solid #E6E6F0;
  border-radius: 8px 8px 0 0;

  & + & {
    border-radius: 0;
    margin-top: 0;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content  = styled.div`
  flex: 1;
  height: 100vh;
  position: relative;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-background);
  color: var(--color-text-title);

  animation: ${appearFromLeft} 1s;

  form {
    position: absolute;
    top: 21%;

    h1 {
      font: 600 3.6rem Poppins;
    }

    h2 {
      width: 21.3rem;
      font: normal 1.6rem Poppins;
      margin: 2.1rem 0 4rem 0;
    }
  }
`;

export const ContentHeader = styled.div`
  width: 35.2rem;
  height: auto;
  margin-top: 3.2rem;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const SiderContainer = styled.div`
  width: 54%;
  height: 100vh;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-primary);
  color: var(--color-title-in-primary);
`;

export const Background = styled.img`
  width: 100%;
  padding: 7.8rem 9.2rem;
`;

export const Logo  = styled.img`
  position: absolute;
`;
