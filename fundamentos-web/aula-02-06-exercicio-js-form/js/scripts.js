const elmIdade     = document.getElementById("idade");
const elmAltura    = document.getElementById("altura");
const elmResultado = document.getElementById("resultado");

function verificar() {
  const inIdade  = Number(elmIdade.value);
  const inAltura = Number(elmAltura.value);

  const condAproAltura      = inAltura >= 1.75;
  const condAproIdade       = inIdade === 18;

  const condReproAltura     = inAltura < 1.75;
  const condReproIdade      = inIdade !== 18;
  const condReproIdadeMaior = inIdade > 18;
  const condReproIdadeMenor = inIdade < 18;

  const condAprovado  = condAproIdade  && condAproAltura;
  const condReprovado = condReproIdade && condReproAltura;

  let outMensagem;


  if (condAprovado) {
      outMensagem =
      "🟢 Aprovado.\nCandidato cumpre todos os requisitos.";
  }

  else if (condReprovado) {
      outMensagem =
      "🔴 Reprovado.\nCandidato não cumpre nenhum dos requisitos.";
  }

  else {
    if (condReproIdadeMaior) {
      outMensagem =
      "🔴 Reprovado.\n\nCandidato possui mais de 18 anos.";
    }

    if (condReproIdadeMenor) {
      outMensagem =
      "🔴 Reprovado.\n\nCandidato possui menos de 18 anos.";
    }

    if (condReproAltura) {
      outMensagem =
      "🔴 Reprovado.\nCandidato possui menos de 1,75m.";
    }
  }

  elmResultado.textContent = outMensagem;
}


function limpar(){
  const inIdade  = elmIdade;
  const inAltura = elmAltura;

  inIdade.value  = " ";
  inAltura.value = " ";

  elmResultado.textContent = " ";
}
