const Pessoa = {
    nome: "Bruno",
    pegarNome:function(){
        return this.nome
    },
    novoNome:function(nome){
        this.nome = nome
    }
}
const pessoa2 = Pessoa
const pessoa3 = Pessoa
pessoa3.nome = "Cláudio"
Pessoa.novoNome("Leonardo")

console.log(Pessoa.nome)
console.log(pessoa2.nome)
console.log(pessoa3.pegarNome())