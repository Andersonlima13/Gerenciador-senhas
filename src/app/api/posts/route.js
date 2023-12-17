// pages/api/passwords.js
export default (req, res) => {
  if (req.method === 'POST') {
    // Rota para gerar e salvar senhas
    const { length, useSpecialChars } = req.body;

    const generatedPassword = generatePassword(length, useSpecialChars);

    // Salvar a senha
    savePassword(generatedPassword);

    return res.status(200).json({ message: 'Senha gerada e salva com sucesso.' });
  } else if (req.method === 'GET') {
    // Rota para recuperar senhas
    const passwords = getSavedPasswords();
    return res.status(200).json(passwords);
  }

  return res.status(405).end('Método não permitido.');
};

// Função para gerar senhas
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
    throw new Error('A senha deve conter no mínimo 8 caracteres!');
  }
};

// Função para salvar senhas
const savePassword = (password) => {
  // Simulando o salvamento em um array neste exemplo
  savedPasswords.push(password);
};

// Função para recuperar senhas salvas
const getSavedPasswords = () => {
  // Simulando a recuperação do array neste exemplo
  return savedPasswords;
};

// Array simulando senhas salvas
const savedPasswords = [];
