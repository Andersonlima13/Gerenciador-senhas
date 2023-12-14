"use client"

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const PasswordList = styled.div`
  background-color:red;`


const Botao = styled.div`
  width:40%;
  height:30vh;
`

const PasswordManager = styled.div`
  align-items:center
  padding:5px;
  justify-content:center;
  flex-direction:center;
  `


const Icon = styled.div`
  width:5%;
  background-color:black;
  box-shadow: 2px 2px 15px 4px #ad21cc;
  color:white;
  margin-left:3px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;`


const InputContainer = styled.div`
  border-radius:20px;
  margin-right:100px;
  display:flex;
  margin-left:200px;
  background-color:#3d3140;
  margin-top:2px;
  padding:10px;
  width: 50%;
  height: 8vh;
  `

const SearchPassword = styled.input`
  box-shadow: 2px 2px 15px 4px #ad21cc;
  border:None;
  color:white;
  font-size: 40px;
  width:95%;
  height:95%;
  background-color:black`

const Passwords = styled.h1`
  font-size:30px;
  width:5%;
  text-shadow: #ad21cc 2px 2px 15px;
  margin-left:40px;
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
  background-color: #a378ac;
  border-radius:20px;
  font-weight:bold;
  &:hover{
      background-color: #ad21cc;
      transform: scale(1.1);
      transition-property:background-color;
      transition-duration: 1000ms;
    }
  `


const Welcome = styled.h1`
  text-shadow: #ad21cc 2px 2px 15px;
  margin-left:20px;
  `
const Text = styled.div`
  text-shadow: #ad21cc 2px 2px 15px;
  flex-direction:column;
  display-flex;
  font-weight:bold;
  padding-top:20px;
  height: 10vh;
  width: 75%;
  margin-top:20px;
  margin-left:20px;
  
  `

const MainContainer = styled.div`
  background-color: black;
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
  background-color: #fff;
  box-shadow: 2px 2px 15px 4px #ad21cc;
  width: 42%;
  height: 50vh;
  background-color: #ffff;
  padding: 15px;
  margin-bottom: 20px;
  margin-right:10px;
  border-radius:20px;
`;

const RightBox = styled.div`
  background-color: #fff;
  box-shadow: 2px 2px 15px 4px #ad21cc;
  width: 42%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius:20px;
`;

const BottomBox = styled.div`
  box-shadow: 2px 2px 15px 4px #ad21cc;
  width: 95%;
  height: 100vh;
  background-color: #fff;
  margin-bottom:10px;
  border-radius:20px;
`;


const ContainerPage = () => {
  return (
    <MainContainer>
      <TopRow>
        <LeftBox><Welcome>Bem vindo!</Welcome>
                <Text>Gerencie suas senhas e crie chaves aleatórias em um só lugar </Text>
                <Botao> <Button>Gerar Senha</Button></Botao>
              
               
        </LeftBox>
        <RightBox>HISTORICO DAS SENHAS GERADAS AQUII!</RightBox>
      </TopRow>
      <BottomBox>
        <PasswordContainer>
          <Passwords>Senhas Salvas</Passwords>
          <InputContainer>
            <SearchPassword/>
            <Icon><FontAwesomeIcon icon={faSearch}/></Icon>
            

          </InputContainer>
          <PasswordManager><Button>ADICIONAR SENHA</Button> <Button>REMOVER SENHA</Button></PasswordManager>        
        </PasswordContainer>
        <PasswordList>senhas serao geradas aqui</PasswordList>
      </BottomBox>
    </MainContainer>
  );
};

export default ContainerPage;