import React from "react";
import { Link } from "react-router-dom";
import {Container} from "./styles";
import Logo from "../../assets/LogoNavBar.svg";
import Icon from "../../assets/cachorro.jpg";

interface NavBarProps {
  username: string;
}

const NavBar: React.FC <NavBarProps> = (props) => {
  return (
    <Container>
      <span>
        <Link to="/dashboard">
          <img id="logo" src={Logo} alt="Xícara" />
        </Link>
      </span>
      <Link id="toUser" to="/user">
        <img id="icon" src={Icon} alt="Xícara" />
        {props.username}
      </Link>
    </Container>
  )
}

export default NavBar;
