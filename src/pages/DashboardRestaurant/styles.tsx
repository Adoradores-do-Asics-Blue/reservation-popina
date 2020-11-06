import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const TimeList = styled.div`
  display: flex;
  flex-direction: column;
  width: 40em;
  height: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  margin: 0 1em;
  padding: 0 1em;
  border-radius: 1em;
  box-shadow: #c0c0c0 1px 1px;
  background-color: #FFFFFF;

  button {
    border: none;
    padding: 1em 0;
    border-bottom: 2px #EFEFEF solid;
    background: linear-gradient(179.44deg, #806565 0.48%, rgba(255, 255, 255, 0) 235.7%),
    linear-gradient(0deg, #234DE3, #234DE3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #lastbutton {
    border: none;
  }
`

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`

export const BoxCostumer = styled.div`
  display: flex;
  flex-direction: column;
  width: 19em;
  height: auto;
  margin: 0 1em 1em 0;
  padding: 1em;
  border-radius: 1em;
  background-color: #FFFFFF;
  box-shadow: #c0c0c0 1px 1px;
  color: #000000;
`

export const BoxCostumerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;

  img {
    height: 5em;
    border-radius: 4em;
    border: 1px solid #EFEFEF;
    margin-right: 1.4em;
  }

  h2 {
    font-weight: bold;
  }
`
