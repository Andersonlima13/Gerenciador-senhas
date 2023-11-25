

export default function Home() {

  let savedPasswords = [];

 /* function savePassword(password) {
  if (password == [""]){
    window.alert("Gere Uma Senha Antes De Salvar!")  
  }else{
    savedPasswords.push(password)
  }
  
  
  }

  function getSavedPasswords() {
    return savedPasswords;
  }



  function generatePassword(length, useSpecialChars) {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    if (useSpecialChars) {
      charset += '!@#$%^&*()_+';
    }
    const passwordArray = Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]);
    if (length > 7) {
    return passwordArray.join('')}
    else{
      window.alert("A senha Deve conter no mínimo 8 caracteres!")
    }
   }
*/

  return (
    <main className="top">
      <div>
        <h1>Gerador de senha</h1>
        <label for="passwordLength">Comprimento da Senha:</label> 
        <input type="number" id="passwordLength" value="12"></input>
        <label for="useSpecialChars">Incluir caracteres especiais:</label>
        <input type="checkbox" id="useSpecialChars"></input>
        <button id="generateButton">Gerar Senha</button>
        <div id="passwordDisplay"></div>
        <button id="saveButton">Salvar Senha</button>
        <h2>Senhas Salvas</h2>
        <ul id="savedPasswordsList"></ul>
  

      </div>
    </main>


  )
}

//export { generatePassword };
//export { savePassword, getSavedPasswords };
