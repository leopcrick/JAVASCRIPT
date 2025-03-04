//VERIFICAR SE UM NÚMERO É BISSEXTO OU NÃO
//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//VERIFICAÇÃO DE INPUT
//MÉTODO 1
/* function verificacao(input){
    let suporte = [...input]
    let cont = 0
    suporte.map((el)=>{
        if (el == Number(el)){
            cont++
        }
    })
    if (cont == input.length){
        return true
    }
} */
//MÉTODO 2
/* function verificacao(input){
    let cont = 0
    for (i=0 ; i<input.length ; i++){
        if (input[i]==Number(input[i])){
            console.log("O caractere é um número")
            cont++
        } else {
            console.log("O carctere NÃO é um número")
        }
    }
    if (cont == input.length){
        return true
    } else {
        return false
    }
} */
//MÉTODO 3
function verificacao(input){
    return !isNaN(input) && input.trim() != ""
}

//TESTE ANO BISSEXTO
function teste(numero){
    if (numero%4==0 && (numero%100!=0 || numero%400==0)){
        console.log("O ano é bissexto")
    } else {
        console.log("O ano não é bissexto")
    }
}

//CÓDIGO GERAL
function rodar(){
    rl.question('Digite um ano: ', (input) => {
        numero = Number(input)
        if (verificacao(input)){
            teste(numero)
            rodar()
            // rl.close();
        } else {
            process.stdout.write("O dado fornecido não é um número.")
            console.log("")
            rodar()
        }
    });
}

rodar()

//7minutos fazendo a verificação errado e mais 4 minutos corrigindo kkkkkkkkkkk