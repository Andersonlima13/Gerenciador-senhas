"use client"

import NavBar from "./Components/navbar.js"
import ContainerPage from "./Components/homepage.js"
import styled from "styled-components";


const Container = styled.div`
    `


const Main = () => {



  return (
    <Container>
      <NavBar/>
      <ContainerPage/>
    </Container>
   

  );
};

export default Main;
