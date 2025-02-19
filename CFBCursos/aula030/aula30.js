//GET ELEMENT BY ID
const d1=document.getElementById("c1")
const d2=document.getElementById("c2")
const d3=document.getElementById("c3")
const d4=document.getElementById("c4")
const d5=document.getElementById("c5")
const d6=document.getElementById("c6")

const arrayElementos=[d1, d2, d3, d4, d5, d6]

arrayElementos.map((elemento)=>{
    elemento.innerHTML="CFB Cursos"
})



//GET ELEMENTS BY TAG NAME: MÉTODO 1
let colecaoHTML = document.getElementsByTagName("div")
colecaoHTML = [...colecaoHTML]
colecaoHTML.map((elementoss)=>{
    elementoss.innerHTML="CFB Cursos 2"
})

//GET ELEMENTS BY TAG NAME: MÉTODO 2
const colecao2 = [...document.getElementsByTagName("div")]
colecao2.map((elementoss)=>{
    elementoss.innerHTML="CFB Cursos 3"
})



//GET ELEMENTS BY CLASS NAME
const colecao3 = [...document.getElementsByClassName("teste")]
const colecao4 = document.getElementsByClassName("classe1")
const colecao5 = [...document.getElementsByClassName("classe2")]
console.log(colecao3)
console.log(colecao4)
console.log(colecao5)

colecao3.map((elementosss)=>{
    elementosss.style.backgroundColor = 'red'
})

colecao5.map((elementos)=>{
    elementos.classList.add("destaque")
})

const colecao6 = document.getElementsByClassName("teste")[1]
colecao6.style.color='green'
