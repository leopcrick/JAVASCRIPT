const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const caixa3=document.querySelector("#caixa3")

let mapa = new Map()

mapa.set("curso", "Javascript")
mapa.set("curso", "PHP")
mapa.set(10, "CFB Cursos")
mapa.set(3, 20)
mapa.set("canal", 20)

caixa1.innerHTML = mapa.get("curso")

if (mapa.has("canal")){
    caixa2.innerHTML = "A chave existe na coleção com valor " + mapa.get("canal")
} else {
    caixa2.innerHTML = "A chave não existe na coleção"
}

mapa.delete(3)

caixa3.innerHTML = "O tamanho da coleção é " + mapa.size

mapa.forEach((elemento)=>{
    console.log("Ola")
    console.log(elemento)
})

//MAP É DO TIPO CHAVE - VALOR