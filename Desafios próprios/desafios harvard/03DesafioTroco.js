//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//FUNÇÃO PARA VERIFICAR ENTRADA
function verificar(){
    if (troco <= 0){
        return true
    } else {
        return false
    }
}

//FUNÇÃO PARA CALCULAR O TROCO
function calcular(){
    var trocototal = troco
    var moeda100 = Math.floor(troco / 1)
    troco = troco % 1
    var moeda50 = Math.floor(troco / 0.50)
    troco = troco % 0.50
    var moeda25 = Math.floor(troco / 0.25)
    troco = troco % 0.25
    var moeda10 = Math.floor(troco / 0.10)
    troco = troco % 0.10
    var moeda5 = Math.floor(troco / 0.05)
    troco = troco % 0.05
    var moeda1 = Math.round(troco / 0.01)
    
    console.log(`O valor do troco total de ${trocototal} será de:`)
    console.log(`${moeda100} moedas de 1 real`)
    console.log(`${moeda50} moedas de 50 centavos`)
    console.log(`${moeda25} moedas de 25 centavos`)
    console.log(`${moeda10} moedas de 10 centavos`)
    console.log(`${moeda5} moedas de 5 centavos`)
    console.log(`${moeda1} moedas de 1 centavo`)
}

//CÓDIGO GERAL
function rodar(){
    rl.question('Digite o valor do troco: R$', (input) => {
        troco = Number(input)

        if (verificar()){
            process.stdout.write("O número fornecido é menor que zero.")
            console.log("O número fornecido é menor que zero.")
            rodar()
        } else {
            calcular()
            rl.close();
        }
    });
}

rodar ()