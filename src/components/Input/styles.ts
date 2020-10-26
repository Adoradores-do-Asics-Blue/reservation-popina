import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #d5cdf1;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #1a1e2c;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #612f74;
      border-color: #612f74;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #612f74;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #1a1e2c;

    &::placeholder {
      color: #1a1e2c;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
