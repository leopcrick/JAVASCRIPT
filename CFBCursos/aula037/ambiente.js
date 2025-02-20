const section1=document.querySelector("#section1")
/* const btc=document.querySelector("#lugar1") */
const cursos=[...document.querySelectorAll(".curso")]

section1.addEventListener("click", (evt)=>{
    console.log("clicou")
})

const btc=document.querySelector("#lugar1").addEventListener("click", (evt)=>{
    evt.stopPropagation()
})

