// pages/api/passwords.js
import { generatePassword } from '../../passwordGenerator';

const savedPasswords = [];

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Rota para gerar senha
    const length = parseInt(req.query.length, 10) || 12;
    const useSpecialChars = req.query.useSpecialChars === 'true';
    const newPassword = generatePassword(length, useSpecialChars);
    res.status(200).json({ password: newPassword });
  } else if (req.method === 'POST') {
    // Rota para salvar senha
    const { password } = req.body;
    if (password === '') {
      res.status(400).json({ error: 'Gere uma senha antes de salvar!' });
    } else {
      savedPasswords.push(password);
      res.status(200).json({ message: 'Senha salva com sucesso!' });
    }
  } else if (req.method === 'GET' && req.query.action === 'saved-passwords') {
    // Rota para obter senhas salvas
    res.status(200).json({ savedPasswords });
  } else {
    res.status(405).end(); // Método não permitido
  }
}
