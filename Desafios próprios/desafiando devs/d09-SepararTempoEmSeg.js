//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//FUNÇÃO VERIFICAR
function verificar(input){
    let suporte = input.split(":");
    if (input.length!=8 || suporte.length!=3){
        return false
    } else if (Number(suporte[1]>60)){
        return false
    } else if (Number(suporte[2]>60)){
        return false
    } else if (!/^\d{2}$/.test(suporte[0]) || !/^\d{2}$/.test(suporte[1]) || !/^\d{2}$/.test(suporte[2])) {
        return false
    } else {
        return true
    }
}

//DIVIDIR O TEMPO
function tempo(input){
    let suporte = input.split(":");
    const hora = Number(suporte[0]);
    const minutos = Number(suporte[1]);
    const segundos = Number(suporte[2]);
    const tempoTotal = hora*3600 + minutos*60 + segundos
    console.log("O tempo total do input é de " + tempoTotal + " segundos");
}

//CÓDIGO GERAL
function rodar(){
    console.log("Digite um tempo no formato HH:MM:SS")
    rl.question('Digite seu número: ', (input) => {
        if (verificar(input)){
            tempo(input)
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

//TEMPO: 15minutos sem verificação
//TEMPO: 30minutos total com verificação