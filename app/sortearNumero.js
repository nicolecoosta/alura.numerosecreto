const menorValor = 1
const maiorValor = 100
const numeroScreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio (){
  return parseInt(Math.random() * maiorValor + 1)
}
console.log("O Número secreto é: " + numeroScreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor