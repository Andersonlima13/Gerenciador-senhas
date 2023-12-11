"use client"

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 40px;
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
  width: 90%; /* Ajuste para uma largura maior na parte inferior */
  background-color: #fff;
  padding: 15px;
`;

const ContainerPage = () => {
  return (
    <MainContainer>
      <TopRow>
        <LeftBox><Welcome>Bem vindo usuário!</Welcome>
                <Text>Seja bem vindo ao site blablabla mantenha suas senhas salvas e seguras aqui tlg? lorem ipsum dolor lorem ipsum and the lorem of text of meaning</Text>
                <Button>CLIQUE E SABA MUITO</Button></LeftBox>
        <RightBox>Conteúdo da Div à Direita</RightBox>
      </TopRow>
      <BottomBox>Conteúdo da Div Inferior</BottomBox>
    </MainContainer>
  );
};

export default ContainerPage;