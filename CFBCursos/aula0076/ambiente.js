const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")

btn_promessa.addEventListener("click", (evt)=>{
    numero.innerHTML="Processando..."
    funcaoPromessa()
    .then((retorno)=>{ //RETIRADO promessa.then E FICA APENAS .THEN (REFERENTE À FUNÇÃO)
        numero.innerHTML=retorno
    })
    .catch((retorno)=>{
        numero.innerHTML=retorno
    })
})

const funcaoPromessa = ()=>{
    let promessa = new Promise((resolved, rejected)=>{
        let resultado=true
        let tempo=3000
        setTimeout(() => {
            if(resultado){
                resolved("Deu tudo CERTO")
            } else {
                rejected("Deu tudo ERRADO")
            } 
        }, tempo)
    })
    return promessa //TEM QUE ADICIONAR O RETURN
}


numero.innerHTML="Esperando inicialização"