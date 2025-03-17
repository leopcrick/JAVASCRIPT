const visor = document.querySelector("#pvisor")
let resultado = 0
let resultadoRecente = false


//ADICIONA OS NÚMEROS NA CALCULADORA ---------------------------------
const botaoNumerico = [...document.querySelectorAll(".botaoNumerico")]
botaoNumerico.forEach((elemento)=>{
    elemento.addEventListener("click", (evt)=>{
        if(visor.textContent==0){
            visor.innerHTML=elemento.innerHTML
        } else if(visor.textContent.endsWith(")")){

        } else {
            visor.innerHTML+=elemento.innerHTML
            resultadoRecente = false
        }
    })
})


//ADICIONA OS OPERADORES ---------------------------------------
const operador = [...document.querySelectorAll(".operador")]
operador.forEach((elemento)=>{
    elemento.addEventListener("click", (evt)=>{
        let lastCaractere = visor.textContent.slice(-1)
        if (visor.innerHTML.length==1){
            if (lastCaractere=="0" || lastCaractere=="+" || lastCaractere=="-"){
                if(elemento.innerHTML=="+" || elemento.innerHTML=="-"){
                    visor.innerHTML=elemento.innerHTML
                }
            } else if (lastCaractere=="/" || lastCaractere=="*"){
            } else if (lastCaractere=="(" && elemento.innerHTML=="-"){
                visor.innerHTML+=elemento.innerHTML
            } else if (lastCaractere=="("){
            } else {
                visor.innerHTML+=elemento.innerHTML
            }
        } else if (visor.innerHTML.length>1){
            if (lastCaractere=="+" || lastCaractere=="-" || lastCaractere=="/" || lastCaractere=="*"){
                if(visor.textContent.slice(-2, -1)=="(" && !(elemento.innerHTML=="-" || elemento.innerHTML=="+")){
                } else {
                    visor.innerHTML=visor.textContent.slice(0, -1)
                    visor.innerHTML+=elemento.innerHTML
                }
            } else if(lastCaractere=="(" && (elemento.innerHTML=="-" || elemento.innerHTML=="+")){
                visor.innerHTML+=elemento.innerHTML
            } else if(lastCaractere=="("){

            } else {
                    visor.innerHTML+=elemento.innerHTML
            }
        }
        visor.innerHTML = visor.innerHTML.replace(/x/g, "*")
        visor.innerHTML = visor.innerHTML.replace(/÷/g, "/")
        resultadoRecente = false
    })
})


//ADICIONA ABRE PARÊNTESES ---------------------------------
const abreParenteses = document.querySelector("#abreParenteses")
abreParenteses.addEventListener("click", (evt)=>{
    if(visor.textContent==0){
        visor.innerHTML=abreParenteses.innerHTML
    } else if(!visor.textContent.endsWith("+") && !visor.textContent.endsWith("-") && !visor.textContent.endsWith("*") && !visor.textContent.endsWith("/") && !visor.textContent.endsWith("(")){
        
    } else {
        visor.innerHTML+=abreParenteses.innerHTML
        resultadoRecente = false
    }
})
//ADICIONA FECHA PARÊNTESES
const fechaParenteses = document.querySelector("#fechaParenteses")
fechaParenteses.addEventListener("click", (evt)=>{
    if (visor.textContent.slice(-1)=="+" || visor.textContent.slice(-1)=="-" || visor.textContent.slice(-1)=="/" || visor.textContent.slice(-1)=="*"){
    } else if(visor.textContent.split("(").length-1>visor.textContent.split(")").length-1){
        if (visor.textContent.slice(-1)=="("){
            visor.innerHTML+="0"
        }
        visor.innerHTML+=fechaParenteses.innerHTML
        resultadoRecente = false
    }
})

//APAGAR VISOR ----------------------------------------
const zerar = document.querySelector("#zerar")
zerar.addEventListener("click", (evt)=>{
    visor.innerHTML="0"
    resultado = 0
    resultadoRecente = false
})

//DELETAR ÚLTIMO CLICK----------------------------------------
const deletar = document.querySelector("#deletar")
deletar.addEventListener("click", (evt)=>{
    if (resultadoRecente == true){
        visor.textContent = "0"
        resultado = 0
    } else if(visor.textContent.length>1){
        if(visor.textContent.endsWith("w")){
            visor.textContent = visor.textContent.slice(0, -4)
        } else {
            visor.textContent = visor.textContent.slice(0, -1)
        }
    } else {
        visor.textContent = "0"
        resultado = 0
    }
})


//FAZER CONTA ------------------------------------------------
const fazerConta = document.querySelector("#fazerConta")
fazerConta.addEventListener("click", (evt)=>{
    if (visor.innerHTML.includes("Answ")) {
        visor.innerHTML = visor.innerHTML.replace(/Answ/g, resultado)
    }
    visor.innerHTML=eval(visor.innerHTML)
    resultado = eval(visor.innerHTML)
    resultadoRecente = true
})


//ADICIONAR VÍRGULA
const virgula = document.querySelector("#virgula")
virgula.addEventListener("click", (evt)=>{
    let partes = visor.textContent.split(/[\+\-\*\/]/)
    if(!partes[partes.length - 1].includes(".")){
        visor.innerHTML+=virgula.innerHTML
        visor.innerHTML = visor.innerHTML.replace(/,/g, ".")
    }
    resultadoRecente = false
})


//ADICIONAR ANSWER
const answer = document.querySelector("#resultado")
answer.addEventListener("click", (evt)=>{
    if(visor.textContent==0){
        visor.innerHTML=0
    } else if(visor.textContent.endsWith("+") ||visor.textContent.endsWith("-") || visor.textContent.endsWith("/") || visor.textContent.endsWith("*") || visor.textContent.endsWith("(") ){
        visor.innerHTML+=answer.innerHTML
        resultadoRecente = false
    } else {
    }
})




//COLOCAR NÚMEROS NO TECLADO
function encontrarBotaoPorTexto(seletor, texto) {
    const botoes = document.querySelectorAll(seletor);
    for (const botao of botoes) {
        if (botao.textContent.trim() === texto) {
            return botao;
        }
    }
    return null;
}

const teclas = { // MAPEANDO CADA UMA DAS TECLAS
    "0": { seletor: ".botaoNumerico", texto: "0" }, // Tecla 0
    "1": { seletor: ".botaoNumerico", texto: "1" }, // Tecla 1
    "2": { seletor: ".botaoNumerico", texto: "2" }, // Tecla 2
    "3": { seletor: ".botaoNumerico", texto: "3" }, // Tecla 3
    "4": { seletor: ".botaoNumerico", texto: "4" }, // Tecla 4
    "5": { seletor: ".botaoNumerico", texto: "5" }, // Tecla 5
    "6": { seletor: ".botaoNumerico", texto: "6" }, // Tecla 6
    "7": { seletor: ".botaoNumerico", texto: "7" }, // Tecla 7
    "8": { seletor: ".botaoNumerico", texto: "8" }, // Tecla 8
    "9": { seletor: ".botaoNumerico", texto: "9" }, // Tecla 9
    "+": { seletor: ".operador", texto: "+" },      // Tecla +
    "-": { seletor: ".operador", texto: "-" },      // Tecla -
    "*": { seletor: ".operador", texto: "x" },      // Tecla * (multiplicação)
    "/": { seletor: ".operador", texto: "÷" },      // Tecla / (divisão)
    "(": { seletor: "#abreParenteses", texto: "(" }, // Tecla (
    ")": { seletor: "#fechaParenteses", texto: ")" }, // Tecla )
    ",": { seletor: "#virgula", texto: "," },       // Tecla , (vírgula)
    ".": { seletor: "#virgula", texto: "," },       // Tecla . (ponto, mas mapeado para vírgula)
    "Enter": { seletor: "#fazerConta", texto: "=" }, // Tecla Enter (fazer a conta)
    "Backspace": { seletor: "#deletar", texto: "< =" }, // Tecla Backspace (deletar)
    "Delete": { seletor: "#deletar", texto: "< =" },   // Tecla Delete (deletar)
    "c": { seletor: "#zerar", texto: "C" },         // Tecla C (zerar)
    "C": { seletor: "#zerar", texto: "C" }          // Tecla C (zerar)
}

document.addEventListener("keydown", (evt) => { // Adiciona o evento keydown ao documento
    const mapeamento = teclas[evt.key]; // Obtém o mapeamento da tecla pressionada
    if (mapeamento) { // Se a tecla pressionada estiver mapeada
        const botao = encontrarBotaoPorTexto(mapeamento.seletor, mapeamento.texto);// Encontra o botão correspondente
        if (botao) {
            botao.click() // Simula o clique no botão
        }
    }
})




//BOTÃO DE COPIAR - FEITO COM IA
// Seleciona o elemento #copy
const botaoCopiar = document.querySelector("#copy");
botaoCopiar.addEventListener("click", () => {
    // Usa a API de Clipboard para copiar o texto
    navigator.clipboard.writeText(visor.innerHTML)
        .then(() => {
            botaoCopiar.textContent = "copied!";
            setTimeout(() => {
                botaoCopiar.textContent = "copy";
            }, 2000); // Volta ao texto original após 2 segundos
        })
})