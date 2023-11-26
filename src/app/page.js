"use client"
import React, { useState } from 'react';
import './globals.css';

const Home = () => {
  const [savedPasswords, setSavedPasswords] = useState([]);

  const savePassword = (password) => {
    if (password === '') {
      window.alert('Gere uma senha antes de salvar!');
    } else {
      setSavedPasswords([...savedPasswords, password]);
    }
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
    <main className="top">
      <div>
        <h1>Gerador de senha</h1>
        <label htmlFor="passwordLength">Comprimento da Senha:</label>
        <input type="number" id="passwordLength" defaultValue="12"></input>
        <label htmlFor="useSpecialChars">Incluir caracteres especiais:</label>
        <input type="checkbox" id="useSpecialChars"></input>
        <button
          id="generateButton"
          onClick={() => {
            const length = document.getElementById('passwordLength').value;
            const useSpecialChars = document.getElementById('useSpecialChars').checked;
            const generatedPassword = generatePassword(length, useSpecialChars);
            document.getElementById('passwordDisplay').innerText = generatedPassword;
          }}
        >
          Gerar Senha
        </button>
        <div id="passwordDisplay"></div>
        <button
          id="saveButton"
          onClick={() => {
            const passwordToSave = document.getElementById('passwordDisplay').innerText;
            savePassword(passwordToSave);
          }}
        >
          Salvar Senha
        </button>
        <h2>Senhas Salvas</h2>
        <ul id="savedPasswordsList">
          {savedPasswords.map((password, index) => (
            <li key={index}>{password}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
