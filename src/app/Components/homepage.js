import styled from 'styled-components';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const GenerateSenha = styled.div`
  border-radius:10px;
  text-shadow: #ad21cc 2px 2px 15px;
  justify-content:center;
  background-color:#a378ac;
  align-items:center;
  display:flex;
  width:95%;
  margin:20px;
  height:20vh;
  font-size:8vh;`

const Generate = styled.div`
  justify-content:center;
  text-shadow: #ad21cc 2px 2px 15px;
  align-items:center;
  display:flex;`

const Apagatudo = styled.div`
  padding-top:15px;
  display:flex;
  justify-content:center;
  height:80px;
  width:300px;`

const IconTrash = styled.div`
  cursor:pointer;`


const Elements = styled.li`
  border: 2px solid black;
  flex-direction: row; /* Alteração para organizar os itens em uma linha */
  font-size: 20px;
  display: flex;
  justify-content: space-between; /* Espaço entre os itens */
  align-items: center; /* Alinha verticalmente os itens ao centro */
  background-color: #a378ac;
  margin: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;
const ListaSenhas = styled.ul`
  display: flex;
  flex-direction: column; // Alteração para exibir os itens verticalmente
  padding: 0;
  list-style-type: none;
`;

const Styleinput = styled.div`
  margin-left: 10px;
`;

const Specialchars = styled.div``;

const Passwordlen = styled.div`
  display: flex;
`;

const PasswordList = styled.div`
  padding: 10px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px; // Adicionado para espaçamento entre senhas geradas
  }
`;

const Botao = styled.div`
  justify-content: center;
  width: 80%;
  height: 25vh;
`;

const PasswordManager = styled.div`
  align-items: center;
  padding: 5px;
  justify-content: center;
  flex-direction: center;
`;

const Icon = styled.div`
  border-radius: 15px;
  width: 10%;
  background-color: transparent;
  box-shadow: 2px 2px 15px 4px #ad21cc;
  color: white;
  margin-left: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const InputContainer = styled.div`
  border-radius: 20px;
  margin-right: 100px;
  display: flex;
  margin-left: 200px;
  background-color: #3d3140;
  margin-top: 2px;
  padding: 10px;
  width: 50%;
  height: 8vh;
`;

const SearchPassword = styled.input`
  border-radius: 5px;
  box-shadow: 2px 2px 15px 4px #ad21cc;
  border: none;
  color: white;
  font-size: 40px;
  width: 95%;
  height: 95%;
  background-color: transparent;
`;

const Passwords = styled.h1`
  font-size: 30px;
  width: 5%;
  text-shadow: #ad21cc 2px 2px 15px;
  margin-left: 40px;
`;

const PasswordContainer = styled.div`
  border: 4px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 12px;
  margin-left: 20px;
  width: 40%;
  height: 30%;
  cursor: pointer;
  border: 2px solid;
  background-color: #a378ac;
  border-radius: 20px;
  font-weight: bold;
  &:hover {
    background-color: #ad21cc;
    transform: scale(1.1);
    transition-property: background-color;
    transition-duration: 1000ms;
  }
`;

const Welcome = styled.h1`
  text-shadow: #ad21cc 2px 2px 15px;
  margin-left: 20px;
`;

const Text = styled.div`
  text-shadow: #ad21cc 2px 2px 15px;
  flex-direction: column;
  display: flex;
  font-weight: bold;
  padding-top: 20px;
  height: 10vh;
  width: 75%;
  margin-top: 20px;
`;

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
  background-color: #c2bfbf;
  box-shadow: 2px 2px 15px 4px #ad21cc;
  width: 42%;
  height: 50vh;
  padding: 15px;
  margin-bottom: 20px;
  margin-right: 10px;
  border-radius: 20px;
`;

const RightBox = styled.div`
  background-color: #c2bfbf;
  box-shadow: 2px 2px 15px 4px #ad21cc;
  width: 42%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 20px;
`;

const BottomBox = styled.div`
  box-shadow: 2px 2px 15px 4px #ad21cc;
  width: 95%;
  height: 100vh;
  background-color: #c2bfbf;
  margin-bottom: 10px;
  border-radius: 20px;
`;

const ContainerPage = () => {

  
  const [generatedPasswords, setGeneratedPasswords] = useState([]);
  const [savedPasswords, setSavedPasswords] = useState([]);
  const maxSavedPasswords = 5; // Defina o número máximo de senhas salvas permitidas

  const savePassword = (password) => {
    if (password === '') {
      window.alert('Gere uma senha antes de salvar!');
    } else {
      if (savedPasswords.length < maxSavedPasswords) {
        setSavedPasswords([...savedPasswords, password])
        window.alert('Senha salva com sucesso!');
      } else {
        window.alert('Número máximo de senhas salvas atingido.');
      }
    }
  };
  

  const removePassword = (index) => {
    const updatedPasswords = [...savedPasswords];
    updatedPasswords.splice(index, 1);
    setSavedPasswords(updatedPasswords);
  };

  const removeAllPasswords = () => {
    setSavedPasswords([]);
  };

  
  const getSavedPasswords = () => {
    return savedPasswords;
  };

  const generatePassword = (length, useSpecialChars) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const specialChars = '!@#$%^&*()_+';
    const allChars = useSpecialChars ? charset + specialChars : charset;


    if (length > 7) {
      const regex = new RegExp(`[${allChars}]`);
      let password = '';

      while (!regex.test(password)) {
        password = Array.from({ length }, () => allChars[Math.floor(Math.random() * allChars.length)]).join('');
        
      }

      return password;
    } else {
      window.alert('A senha deve conter no mínimo 8 caracteres!');
      return '';
    }
  };

  return (
    <MainContainer>
      <TopRow>
        <LeftBox>
          <Welcome>Bem vindo!</Welcome>
          <Text>Gerencie suas senhas e crie chaves aleatórias em um só lugar </Text>
          <Botao>
            <Passwordlen>
              <label htmlFor="passwordLength">Comprimento da Senha:</label>
              <Styleinput>
                <input type="number" id="passwordLength" defaultValue="12"></input>
              </Styleinput>
            </Passwordlen>
            <Specialchars>
              <label htmlFor="useSpecialChars">Incluir caracteres especiais:</label>
              <input type="checkbox" id="useSpecialChars"></input>
            </Specialchars>
            <Button
              id="generateButton"
              onClick={() => {
                const length = document.getElementById('passwordLength').value;
                const useSpecialChars = document.getElementById('useSpecialChars').checked;
                const generatedPassword = generatePassword(length, useSpecialChars);
                document.getElementById('passwordDisplay').innerText = generatedPassword;
              }}
            >
              Gerar Senha
            </Button>
            <Button
              id="saveButton"
              onClick={() => {
                const passwordToSave = document.getElementById('passwordDisplay').innerText;
                savePassword(passwordToSave);
              }}
            >
              Salvar Senha
            </Button>
          </Botao>
        </LeftBox>
        <RightBox>
          <Generate>
            <h1> SENHA GERADA</h1>
            
          </Generate>
          <GenerateSenha id="passwordDisplay"></GenerateSenha>
        </RightBox>
      </TopRow>
      <BottomBox>
      <PasswordContainer>
        <Passwords>Senhas Salvas</Passwords>
        <Apagatudo><Button onClick={removeAllPasswords}>Apagar Todas</Button>
        </Apagatudo>
        
      </PasswordContainer>
      <PasswordList>
        <ListaSenhas>
          {savedPasswords.map((password, index) => (
            <Elements key={index}>
              {password}
              <FontAwesomeIcon icon={faTrash} onClick={() => removePassword(index)}>Remover</FontAwesomeIcon>
            </Elements>
          ))}
        </ListaSenhas>
      </PasswordList>
    </BottomBox>
    </MainContainer>
  );
};

export default ContainerPage;
