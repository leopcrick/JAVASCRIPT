class Pessoa{
    constructor (pnome){
        this.nome = pnome
    }
}

let p1 = new Pessoa(10)
let p2 = new Pessoa("Leonardo")
let p3 = new Pessoa("Rick")

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)