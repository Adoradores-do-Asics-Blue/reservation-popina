import styled from 'styled-components';

export const Container = styled.div`
  background: #d5cdf1;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #1a1e2c;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

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
