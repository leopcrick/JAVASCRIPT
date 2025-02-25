const valor1 = document.querySelector("#valor1")
const valor2 = document.querySelector("#valor2")
const resultado = document.querySelector("#resultado")
const valores = [Number(valor1.value), Number(valor2.value)]
const bsoma = document.querySelector("#soma")
const bsubtracao = document.querySelector("#subtracao")
const bmultiplicacao = document.querySelector("#multiplicacao")
const bdivisao = document.querySelector("#divisao")

const operadores = [
    bsoma.addEventListener("click", ()=>{
        resultado.value = Number(valor1.value)+Number(valor2.value)
    }),
    bsubtracao.addEventListener("click", ()=>{
        resultado.value = Number(valor1.value)-Number(valor2.value)
    }),
    bmultiplicacao.addEventListener("click", ()=>{
        resultado.value = Number(valor1.value)*Number(valor2.value)
    }),
    bdivisao.addEventListener("click", ()=>{
        resultado.value = Number(valor1.value)/Number(valor2.value)
    })
]

//último desafio