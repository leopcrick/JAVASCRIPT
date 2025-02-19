//QUERY SELECTOR
const colecaoantiga1 = document.getElementsByTagName("div")
const colecaonova1 = document.querySelector("div")
const colecaonova11 = [...document.querySelectorAll("div, p")]
console.log(colecaonova1)
console.log(colecaonova11)
colecaonova11.map((e)=>{
    e.style.backgroundColor = 'red'
})


const colecaoantiga3=document.getElementById("c1")
const colecaonova3 = document.querySelectorAll("#c1") //retorna NodeList
const colecaonova33 = document.querySelectorAll("#c1")[0] //retorna HTMLDivElement
const colecaonova333 = document.querySelector("#c1") //retorna HTMLDivElement
console.log(colecaonova3)
console.log(colecaonova33)
console.log(colecaonova333)


const colecaoantiga4 = document.getElementsByClassName("teste")
const colecaonova4 = [...document.querySelectorAll(".teste, p")]
console.log(colecaonova4)

/* colecaonova4.map((i)=>{
    i.style.color = 'lightgreen'
}) */

const colecaodoida = [...document.querySelectorAll("div.classe1#c3")]
colecaodoida.map((i)=>{
    i.style.color = 'lightgreen'
})