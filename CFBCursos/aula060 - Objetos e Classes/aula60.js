function Pessoa(pnome, pidade){
    this.nome = pnome,
    this.idade = pidade,

    this.pegarNome=function(){
        return this.nome
    },
    this.pegarIdade=function(){
        return this.idade
    },
    this.mudarNome=function(novoNome){  
        this.nome = novoNome
    },
    this.mudarIdade=function(novaIdade){  
        this.idade = novaIdade
    },
        
    this.informacoes=function(){
        console.log("---------------")
        console.log("Nome: " + this.nome)
        console.log("Idade: " + this.idade)
    }
}

let pessoas = []
const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

btn_add.addEventListener("click", (evt)=>{
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    console.log(pessoas)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoa()
})

function addPessoa(){
    res.innerHTML=""
    pessoas.map((p)=>{
        const div=document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML=`Nome: ${p.pegarNome()}<br>Idade: ${p.pegarIdade()}`
        res.appendChild(div)
    })
}