const contadorElemento = document.getElementById('contador');
const numeroMaximo = 300; // Defina o número máximo desejado
const duracaoTotal = 5000; // Duração total da animação em milissegundos
const inicio = performance.now();

function easeOutQuad(t) {
  return t * (2 - t);
}

function animarContador(tempoAtual) {
  const tempoDecorrido = tempoAtual - inicio;
  let progresso = tempoDecorrido / duracaoTotal;

  if (progresso > 1) {
    progresso = 1;
  }

  const progressoComEasing = easeOutQuad(progresso);
  const valorAtual = Math.round(progressoComEasing * numeroMaximo);
  contadorElemento.textContent = valorAtual;

  if (progresso < 1) {
    requestAnimationFrame(animarContador);
  }
}

requestAnimationFrame(animarContador);