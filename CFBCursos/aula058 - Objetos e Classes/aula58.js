class Carro{
    canal="Youtube do pai"
    constructor (pnome, ptipo){
        this.canal="TikTok do filho"
        this.nome = pnome
        if(ptipo==1){
            this.tipo="Esportivo"
            this.velmax=300
        } else if (ptipo==2){
            this.tipo="utilitário"
            this.velmax=100
        } else if (ptipo==3){
            this.tipo="Passeio"
            this.velmax=180
        } else {
            this.tipo="Militar"
            this.velmax=250
        }
    }
    
    
    
    informacoes(){     //MANEIRA 2
        console.log("---------------")
        console.log("Nome: " + this.nome)
        console.log("Tipo: " + this.tipo)
        console.log(`V.Máx: + ${this.velmax}`)
    }




    //MANEIRA 3
    pegarNome(){
        return this.nome
    }
    pegarTipo(){
        return this.tipo
    }
    pegarVelMax(){
        return this.velmax
    }




    pegarInfos(){      //MANEIRA 4
        return [this.nome, this.tipo, this.velmax]
    }



    mudarNome(novoNome){   //MANEIRA 5
        this.nome = novoNome
    }
}

//DEFININDO OBJETOS A PARTIR DA CLASSE
let c1 = new Carro ("Rapidão", 1)
let c2 = new Carro ("Super Luxo", 2)
let c3 = new Carro ("Bombadão", 3)
let c4 = new Carro ("Carrego tudo", 4)


//MANEIRA 1 -- com c1
console.log("---------------")
console.log(c1.nome)
console.log(c1.tipo)
console.log(c1.velmax)
console.log(c1.canal)


//MANEIRA 2 -- com c2
console.log("---------------")
c2.informacoes()


//MANEIRA 3 -- com c3
console.log("---------------")
console.log(c3.pegarNome())
console.log(c3.pegarTipo())
console.log(c3.pegarVelMax())


//MANEIRA 4 -- com c4 em ARRAY
console.log("---------------")
console.log(c4.pegarInfos())


//MANEIRA 5 -- mudar nome em C1
console.log("---------------")
c1.mudarNome("Carro FORTE")
console.log(c1.nome)