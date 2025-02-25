const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [16, 12, 10, 17, 15, 13, 11, 19]
p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener("click",(evt)=>{
    resultado.innerHTML="Array não conforme"
    const retorno = elementos_array.some((elemento, indice)=>{ //PELO MENOS UM ELEMENTO CONTEMPLA A RESTRIÇÃO
        if(elemento<18){
            console.log(`Array não conforme na posição ${indice}`)
            resultado.innerHTML=(`Array não conforme na posição ${indice}`)
        }
        return elemento>=18
    })
    if (retorno){
        resultado.innerHTML="Array conforme"
    }
    console.log(retorno)
})