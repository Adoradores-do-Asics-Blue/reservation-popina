import React from 'react';
import NavBar from '../../components/NavBar';
import {TimeList, Container, BoxContainer, BoxCostumer, BoxCostumerHeader} from './styles';
import Icon from '../../assets/cachorro.jpg'


const Dashboard: React.FC = () => {
  return(
    <>
      <NavBar username="Cachorro"/>

      <Container>
        <TimeList>
            <button>10:00 - 11:00</button>
            <button>11:00 - 12:00</button>
            <button>12:00 - 13:00</button>
            <button>13:00 - 14:00</button>
            <button>14:00 - 15:00</button>
            <button>15:00 - 16:00</button>
            <button>16:00 - 17:00</button>
            <button id="lastbutton">17:00 - 18:00</button>
        </TimeList>

        <BoxContainer>
          <BoxCostumer>
            <BoxCostumerHeader>
              <img id="fotoUsuario" src={Icon} alt="fotoUsuario" />
              <h2>Lucas Amaral</h2>
            </BoxCostumerHeader>
            <BoxCostumerHeader>
              <img id="fotoUsuario" src={Icon} alt="fotoUsuario" />
              <h2>Lucas Amaral</h2>
            </BoxCostumerHeader>
          </BoxCostumer>
        </BoxContainer>
      </Container>
    </>
  )
}

export default Dashboard;
