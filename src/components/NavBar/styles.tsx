import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  margin: 1em;
  color: #000000;
  border-radius: 10px;

  #logo {
    border-radius: 10px;
    margin: 0.7em;
  }

  #icon {
    border: 1px solid #EFEFEF;
    border-radius: 50%;
    margin-right: 1em;
    height: 50px;
  }

  span {
    border-right: 1px solid #EFEFEF;
  }

  #toUser {
    color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1em;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;
  }
`
