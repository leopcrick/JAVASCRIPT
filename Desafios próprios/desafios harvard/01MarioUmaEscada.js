//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//VARIÁVEIS
let numero = 5

//FUNÇÃO PARA VERIFICAR NÚMERO
function verificar(){
    if (numero >=1 && numero <= 20){
        return true
    } else {
        return false
    }
}

//FUNÇÃO PARA REPETIR
function printar() {
    for ( i=0 ; i<numero ; i++){
        for ( c=numero-1 ; c>i ; c--){
            process.stdout.write("  ")
        }
        for ( c=0 ; c<=i ; c++){
            process.stdout.write("# ")
        }
        console.log("")
    }
}

//CÓDIGO GERAL
function rodar(){
    rl.question('Digite um número de 1 a 20: ', (input) => {
        numero = Number(input)
        if (verificar()){
            printar()
            rl.close();
        } else {
            process.stdout.write("O número fornecido não está entre 1 e 20.")
            console.log("")
            rodar()
        }
    });
}

rodar()