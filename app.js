let listaNumerosSecretos= [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1;
exibirMensagemInicial() 

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2}) ;
}

function exibirMensagemInicial(){
exibirTextoNaTela("h1","Jogo do numero secreto");
exibirTextoNaTela("p",`Escolha um numero entre 1 e ${numeroLimite}`);
}


function verificarChute(){
    let chute = document.querySelector("input").value
    if (chute==numeroSecreto){
        exibirTextoNaTela("h1",`Você acertou O numero secreto é ${numeroSecreto}`);
        let palavraTentativas = tentativas >1? "tentativas":"tentativa";
        exibirTextoNaTela("p",`Em ${tentativas} ${palavraTentativas}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else if (chute>numeroSecreto){
        exibirTextoNaTela("h1","Voce acertou")
        exibirTextoNaTela("p","O numero é menor")
        tentativas++
        limparCampo()
    }
    else{
        exibirTextoNaTela("h1","Você errou")
        exibirTextoNaTela("p","O numero é Maior")
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista= listaNumerosSecretos.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaNumerosSecretos=[]
    }

    if(listaNumerosSecretos.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }
    else{
        listaNumerosSecretos.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo ()
    tentativas=1
    exibirMensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled",true)
}