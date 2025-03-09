//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//VERIFICAR INPUT
function verificar(input){
    if (/^\d+$/.test(input)){
        return true
    } else {
        return false
    }
}

//CÓDIGO GERAL
function rodar(){
    rl.question('Digite o tamanho da base do triângulo: ', (input) => {
        if (verificar(input)){
            numero = Number(input)
            for(i=0 ; i<numero ; i++){
                for(c=0 ; c<=i ; c++){
                    process.stdout.write("*")
                }
                console.log("")
            }
            rl.close();
        } else {
            process.stdout.write("O dado fornecido não é um número, tente novamente.")
            console.log("")
            rodar()
        }
    });
}

rodar()

//TEMPO: 7min