const visor = document.querySelector("#pvisor")


//ADICIONA OS NÚMEROS NA CALCULADORA ---------------------------------
const botaoNumerico = [...document.querySelectorAll(".botaoNumerico")]
botaoNumerico.forEach((elemento)=>{
    elemento.addEventListener("click", (evt)=>{
        if(visor.textContent==0){
            visor.innerHTML=elemento.innerHTML
        } else if(visor.textContent.endsWith(")")){

        } else {
            visor.innerHTML+=elemento.innerHTML
        }
    })
})


//ADICIONA OS OPERADORES ---------------------------------------
const operador = [...document.querySelectorAll(".operador")]
operador.forEach((elemento)=>{
    elemento.addEventListener("click", (evt)=>{
        if(visor.textContent==0){
            visor.innerHTML=elemento.innerHTML
        } else if(visor.textContent.slice(-1)==elemento.innerHTML){

        } else if(visor.textContent.endsWith("+") || visor.textContent.endsWith("-") || visor.textContent.endsWith("*") || visor.textContent.endsWith("/")){
            visor.innerHTML=visor.textContent.slice(0, -1)
            visor.innerHTML+=elemento.innerHTML
        } else {
            visor.innerHTML+=elemento.innerHTML
        }
        visor.innerHTML = visor.innerHTML.replace(/x/g, "*")
        visor.innerHTML = visor.innerHTML.replace(/÷/g, "/")
    })
})


//ADICIONA ABRE PARÊNTESES --------------------------------- TEM QUE VERIFICAR AINDA
const abreParenteses = document.querySelector("#abreParenteses")
abreParenteses.addEventListener("click", (evt)=>{
    if(visor.textContent==0){
        visor.innerHTML=abreParenteses.innerHTML
    } else if(!visor.textContent.endsWith("+") && !visor.textContent.endsWith("-") && !visor.textContent.endsWith("*") && !visor.textContent.endsWith("/") && !visor.textContent.endsWith("(")){
        
    } else {
        visor.innerHTML+=abreParenteses.innerHTML
    }
})
//ADICIONA FECHA PARÊNTESES
const fechaParenteses = document.querySelector("#fechaParenteses")
fechaParenteses.addEventListener("click", (evt)=>{
    if(visor.textContent.split("(").length-1>visor.textContent.split(")").length-1){
        visor.innerHTML+=fechaParenteses.innerHTML
    }
})

//APAGAR VISOR ----------------------------------------
const zerar = document.querySelector("#zerar")
zerar.addEventListener("click", (evt)=>{
    visor.innerHTML="0"
})

//DELETAR ÚLTIMO CLICK----------------------------------------
const deletar = document.querySelector("#deletar")
deletar.addEventListener("click", (evt)=>{
    if(visor.textContent.length>1){
        visor.textContent = visor.textContent.slice(0, -1)
    } else {
        visor.textContent = "0"
    }
})


//FAZER CONTA ------------------------------------------------
const fazerConta = document.querySelector("#fazerConta")
fazerConta.addEventListener("click", (evt)=>{
    visor.innerHTML=eval(visor.innerHTML)
})


//ADICIONAR VÍRGULA

//COLOCAR NÚMEROS NO TECLADO