class Carro{ //CLASSE PAI OU BASE
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.velocidade = 0
        this.cor = undefined
    }
    ligar = function() {
        this.ligado=true
    }
    desligar = function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}


const carro1 = new Carro("Normal", 4)
function printarTudo(carro1){
    console.log(`Nome: ${carro1.nome}`)
    console.log(`Portas: ${carro1.portas}`)
    console.log(`Ligado: ${(carro1.ligado?"Sim":"Não")}`)
    console.log(`Velocidade: ${carro1.velocidade}`)
    console.log(`Cor: ${carro1.cor}`)
    console.log("----------------------")
}
printarTudo(carro1)

carro1.ligar()
carro1.setCor("Vermelho")
printarTudo(carro1)




class Militar extends Carro{ //CLASSE FILHA
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setCor("Verde")
    }
    atirar = function(){
        if(this.municao>0){
            this.municao--
        }
    }
}
const carro2 = new Militar("Lutador", 1, 100, 50)
carro2.setCor("Azul")
printarTudo(carro2)
carro2.atirar()
carro2.atirar()
carro2.atirar()
carro2.atirar()
carro2.atirar()
console.log(`Blindagem: ${carro2.blindagem}`)
console.log(`Munição: ${carro2.municao}`)