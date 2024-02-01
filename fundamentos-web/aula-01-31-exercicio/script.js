function exibirNomeCompleto() {
  const inNome = document.getElementById("inNome").value;
  const inSobrenome = document.getElementById("inSobrenome").value;
  const outParagrafo = document.getElementById("outParagrafo");

  outParagrafo.textContent = `Nome:  ${inNome}  ${inSobrenome}`;
}
