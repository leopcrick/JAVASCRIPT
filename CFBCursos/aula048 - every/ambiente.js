const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [21, 25, 19, 20, 16, 18, 22]
p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener("click",(evt)=>{
    resultado.innerHTML="Array não conforme"
    const retorno = elementos_array.every((elemento, indice)=>{
        if(elemento<20){
            console.log(`Array não conforme na posição ${indice}`)
            resultado.innerHTML=(`Array não conforme na posição ${indice}`)

        }
        return elemento>=20 //está mostrando só o primeiro errado
    })
    if (retorno){
        resultado.innerHTML="Array conforme"
    }
    console.log(retorno)
})