"use client"

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const PasswordManager = styled.div`
  align-items:center
  padding:5px;
  justify-content:center;
  flex-direction:center;
  background:cyan;`


const Icon = styled.div`
  margin-left:3px;
  border-radius:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:yellow;
  cursor:pointer;`


const InputContainer = styled.div`
  margin-right:100px;
  display:flex;
  margin-left:200px;
  background-color:green;
  padding:10px;
  width: 60%;
  height: 10vh;
  `

const SearchPassword = styled.input`
  font-size: 40px;
  width:95%;
  height:95%;
  background-color:red`

const Passwords = styled.h1`
  `

const PasswordContainer = styled.div`
  display:flex;
  background-color:gray;`

const Button = styled.button`
  margin-top: 12px;
  margin-left: 20px;
  width: 60%;
  height: 30%;
  cursor : pointer ;
  border: 2px solid;
  background-color: transparent;
  border-radius:20px;
  font-weight:bold;
  &:hover{
      background-color: #ee2853;
      transform: scale(1.1);
      transition-property:background-color;
      transition-duration: 1000ms;
    }
  `

const Welcome = styled.h1`
    margin-left:20px;
  `
const Text = styled.div`
  font-weight:bold;
  padding-top:20px;
  background-color:gray;
  height: 10vh;
  width: 75%;
  margin-top:20px;
  margin-left:20px;
  
  `

const MainContainer = styled.div`
  background-color: blue;
  height: 100vh;
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`;

const LeftBox = styled.div`
  width: 48%;
  height: 50vh;
  background-color: yellow;
  padding: 15px;
  margin-bottom: 20px;
  margin-right:10px;
  border-radius:20px;
`;

const RightBox = styled.div`
  width: 48%;
  background-color: green;
  padding: 15px;
  margin-bottom: 20px;
  border-radius:20px;
`;

const BottomBox = styled.div`
  width: 95%;
  height: 100vh;
  background-color: #fff;
  border:4px solid red;
  margin-bottom:10px;
  border-radius:20px;
`;

const Footer = styled.div`
  margin-top:40px;
  width: 100%;
  height: 40vh;
  background-color:green;`

const ContainerPage = () => {
  return (
    <MainContainer>
      <TopRow>
        <LeftBox><Welcome>Bem vindo usuário!</Welcome>
                <Text>Seja bem vindo ao site blablabla mantenha suas senhas salvas e seguras aqui tlg? lorem ipsum dolor lorem ipsum and the lorem of text of meaning</Text>
                <Button>CLIQUE E SABA MUITO</Button></LeftBox>
        <RightBox>Conteúdo da Div à Direita</RightBox>
      </TopRow>
      <BottomBox>
        <PasswordContainer>
          <Passwords>Senhas Salvas</Passwords>
          <InputContainer>
            <SearchPassword/>
            <Icon><FontAwesomeIcon icon={faSearch}/></Icon>
            

          </InputContainer>
          <PasswordManager><Button>adicionar senhas</Button> <Button>adicionar senhas</Button></PasswordManager>
          
        </PasswordContainer>
      </BottomBox>
    </MainContainer>
  );
};

export default ContainerPage;