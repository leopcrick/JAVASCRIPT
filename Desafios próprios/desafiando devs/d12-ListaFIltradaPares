//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//VERIFICAR INPUT
function verificar(input){
    if (input.trim()=="" ){ //verificar que não é entrada vazia
        return false
    }
    if (/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(input)){ //verificar que não tem letras
        return false
    }
    if (input.split(" ").length-1==0){ //verificar se tem um espaço <<--dá pra melhorar
        return false
    } else {
        return true
    }
}


//CÓDIGO PARA SEPARAR OS PARES
function separarPares(numeros){
    let numerosPares = []
    for (el of numeros){
        if (el%2==0){
            numerosPares.push(el)
        }
    }
    console.log(numerosPares)
}

//CÓDIGO GERAL
function rodar(){
    rl.question('Digite uma lista de números separadas por espaço: ', (input) => {
        if (verificar(input)){
            console.log("Parabéns! Deu certo.")
            let numeros
            numeros = input.trim().split(" ").filter(nome => nome !== "") //SEPARAR NÚMEROS
            separarPares(numeros)
            rl.close();
        } else {
            process.stdout.write("Os dados fornecidos não são válidos.")
            console.log("Digite apenas números.")
            console.log("")
            rodar()
        }
    });
}

rodar()

//TEMPO PARA FAZER: 9min SAFE