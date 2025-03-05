//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//CÓDIGO GERAL
function rodar(){
    rl.question('Digite um número de 1 a 20: ', (input) => {
        numero = Number(input)
        if (verificar()){
            console.log("Parabéns! Deu certo.")
            rl.close();
        } else {
            process.stdout.write("O número fornecido não está entre 1 e 20.")
            console.log("")
            rodar()
        }
    });
}

rodar()