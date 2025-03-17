const numero = document.getElementById("numero")

let promessa = new Promise((resolved, rejected)=>{
    let resultado=true
    let tempo=3000
    setTimeout(() => {
        if(resultado){
            resolved("Deu tudo CERTO")
        } else {
            resolved("Deu tudo ERRADO")
        } 
    }, tempo);
})
promessa.then((retorno)=>{
    numero.innerHTML=retorno
})
promessa.catch((retorno)=>{
    numero.innerHTML=retorno
})

numero.innerHTML="Processando..."