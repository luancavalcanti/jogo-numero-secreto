const menorValor = 0;
const maiorValor = 100;
let temp_menorValor = menorValor;
let temp_maiorValor = maiorValor;
const numeroSecreto = gerarNumeroAleatorio();
const arrayChute = [];

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor);
}

console.log("Número Secreto:", numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;