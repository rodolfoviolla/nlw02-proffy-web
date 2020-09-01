import styled, { css, keyframes } from 'styled-components';

export const InputStyles = css`
  width: 35.2rem;
  height: 7.2rem;
  margin: 0;
  padding: 0;
  border: 0.1rem solid #E6E6F0;
  border-radius: 0.8rem 0.8rem 0 0;

  & + & {
    border-radius: 0 0 0.8rem 0.8rem;
    margin-top: 0;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: stretch;

  overflow: hidden;

  @media (max-width: 1400px) {
    flex-direction: column;
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

  @media (max-width: 1400px) {
    justify-content: flex-start;
    width: 100vw;
    height: auto;
  }
`;

export const Background = styled.img`
  width: 100%;
  max-width: 800px;
  padding: 7.8rem 9.2rem;

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const Logo  = styled.img`
  position: absolute;

  @media (max-width: 1400px) {
    position: relative;
    width: 20rem;
    margin: 2rem 0 2rem 5rem;
  }

  @media (max-height: 660px) {
    position: relative;
    width: 15rem;
    margin: 2rem 0 2rem 5rem;
  }
`;

const appearFromRight = (from: number) => keyframes`
  from {
    opacity: 0;
    transform: translateX(${from}rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content  = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 22.9rem;

  background-color: var(--color-background);
  color: var(--color-text-title);

  animation: ${appearFromRight(5)} 1s;

  @media (max-width: 1400px) {
    margin-top: 2rem;
    animation: ${appearFromRight(3)} 1s;
  }

  form {
    h1 {
      font: 600 3.6rem Poppins;
      margin-bottom: 4.0rem;
    }
  }
`;

export const PasswordRemember  = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font: 1.4rem Poppins;
  line-height: 2.4rem;
  color: var(--color-text-complement);

  margin: 2.4rem 0 4rem 0;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Footer  = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 35.2rem;
  margin: 4.8em;
`;

export const FooterSignUp  = styled.div`
  display: block;

  p {
    color: var(--color-text-base);
  }

  a {
    font-weight: 600;
    color: var(--color-primary);
  }
`;

export const FooterMessage = styled.div`
  display: block;

  p {
    font-size: 1.2rem;
    color: var(--color-text-complement);

    img {
      margin-left: 0.8rem;
      color: var(--color-primary);
    }
  }
`;
