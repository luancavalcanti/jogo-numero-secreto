 function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Isso não é um número</div><div>Fale novamente</div>';
        return;
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Fale um número entre ${menorValor} e ${maiorValor}
        </div>
        `;
        return;
    }
    if(numero === numeroSecreto){
        document.body.style.backgroundColor = '#E74646';
        document.body.innerHTML = `
            <h2>Você perdeu!</h2>
            <h3>O número sercreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
    }else if (numero > numeroSecreto){
        temp_maiorValor = numero;
        elementoChute.innerHTML += `
        <div>O número está entre" ${temp_menorValor} e ${temp_maiorValor}</div>
        `
    }else{
        temp_menorValor = numero;
        arrayChute.push(numero);
        elementoChute.innerHTML += `
        <div>O número está entre" ${temp_menorValor} e ${temp_maiorValor}</div>
        `
    }
    if(temp_maiorValor - temp_menorValor == 2){
        document.body.style.backgroundColor = '#54B435';
        document.body.innerHTML = `
            <h2>Você Ganhou!</h2>
            <h3>O número sercreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
    }
    console.log("quantidade de opções:", temp_maiorValor - temp_menorValor)

}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})