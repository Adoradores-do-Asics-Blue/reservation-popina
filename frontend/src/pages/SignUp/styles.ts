import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/3.jpeg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  width: 100%;

  p {
    color: #000;
    font-weight: bold;
    font-family: sans-serif;
  }

  button {
    height: 25px;
    width: 50px;
    font-size: 15px;
    background: #1a1e2c;
    border: 1px solid #d3e2e5;
    color: #fff;
    cursor: pointer;
  }

  button.active {
    border: 1px solid #a18de7;
    color: #a18de7;
  }

  .button-select button:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  .button-select button:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }
`;

export const Btn = styled.div``;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 30px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 20px;
      color: #1a1e2c;
    }

    a {
      font-size: 20px;
      color: #a18de7;
      display: block;
      margin-top: 20px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#A18DE7')};
      }
    }
  }

  > a {
    font-size: 20px;
    color: #000;
    display: block;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
