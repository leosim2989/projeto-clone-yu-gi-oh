// passo 1 dar um jeito de pegar o elemento HTML da seta avancar
console.log(document.getElementById("btn-avancar"));

// passo 2 Dar um jeito de indentificar o clice do usuario na seta voltar
//document.getElementById("btn-avancar").addEventListener("click", function (){console.log('clicou no botao');});
const btnavancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

//passo 2 - dar um jeito de indentificar o clice do usuario na seta avancar
btnavancar.addEventListener("click", function () {
  console.log(cartaoAtual);
  console.log(cartoes.length - 1);

  if (cartaoAtual === cartoes.length - 1) {
    return;
  }

  //passo 4 - buscar o cartao que esta selecionado e esconder
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

  // passo 3 - fazer aparecer o proximo cartao da lista
  cartaoAtual++;
  cartoes[cartaoAtual].classList.add("selecionado");
});

/*

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
    
    */

const btnvoltar = document.getElementById("btn-voltar");
btnvoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

  cartaoAtual--;
  cartoes[cartaoAtual].classList.add("selecionado");
});


