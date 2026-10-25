// Funções centrais da aplicação para os testes automatizados
function validarEntrada(texto) {
  if (!texto || texto.trim() === "") {
    return false;
  }
  return true;
}

function formatarNome(nome) {
  if (!nome) return "";
  return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}

module.exports = { validarEntrada, formatarNome };
