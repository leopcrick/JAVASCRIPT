const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos_array = [10, 5, 8, 2, 9, 15, 20]
p_array.innerHTML="["+elementos_array+"]"

btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="O elemento digitado não foi encontrado"
    elementos_array.find((elemento, indice)=>{
        if(elemento==txt_pesquisar.value){
            resultado.innerHTML=(`O elemento ${elemento} foi encontrado na posição ${indice+1}`)
        }
    })
})