"use client"

import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"

const Container = styled.div`
  height: 60px;
  background-color:#ad21cc;
 
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight:bold;
  
`;

const Logotipo = styled.span`
  flex-direction: column;
  padding-left : 15px;
  font-size: 28px;
  cursor: pointer;
  text-shadow: white 2px 2px 15px;
  font-weight: bold;
 
`;



const Center = styled.div`
  cursor:pointer;
  flex: 1;
  display:flex;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-shadow: white 2px 2px 15px;
  padding:10px;
  font-size:20px;
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight:bold;

  
`;

const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-shadow: 1px 1px 2px #e61543;
  &:hover{
    text-shadow: 1px 4px 10px #e61543;
    transform: scale(1.1);
    transition-property:background-color;
    transition-duration: 1000ms;
  }

  
`;


const NavBar = () => {



  return (
    <Container>
    <Wrapper>
      <Left>
          <Logotipo> <FontAwesomeIcon icon={faKey}/> Gerenciador De Senhas</Logotipo>
      </Left>
      <Center>
          <Logo> Gerar senhas </Logo>
          <Logo> Senhas Salvas</Logo>
          <Logo> Histórico </Logo>
      </Center>
      <Right> 
          <Menu><FontAwesomeIcon icon={faUser}/> </Menu>
          <Menu> <FontAwesomeIcon icon={faSignOut}/> </Menu>
      </Right>
    </Wrapper>
  </Container>

  );
};

export default NavBar;
