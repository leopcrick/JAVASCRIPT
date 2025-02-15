//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const { Console } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//VARIÁVEIS
var n = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var xouzero = 'X'
var teste = false
var cont = 0


//FUNÇÃO PARA EXIBIR A MATRIZ
function exibirmatriz(){
    let matriz = [[n[0], n[1], n[2]],[n[3], n[4], n[5]], [n[6], n[7], n[8]]]
    for ( i=0 ; i<3 ; i++){
        for ( c=0 ; c<3 ; c++){
            process.stdout.write(matriz[i][c] + " ")
        }
        console.log()
    }
}

//FUNÇÃO PARA VERIFICAR A JOGADA
function verificacao(jogada){
    if (n[jogada] == 'X' || n[jogada] == 0 ){
        return false
    } else {
        return true
    }
}

//FUNÇÃO PARA CONTINUAR OU PARAR O JOGO
function verificar(){
    for (i=0 ; i<7 ; i+=3){
        if (n[i] == n[i+1] && n[i+1] == n[i+2] && n[i+2] == xouzero){
            teste = true
        } 
    }
    for (i=0 ; i<3 ; i++){
        if (n[i] == n[i+3] && n[i+3] == n[i+6] && n[i+6] == xouzero){
            teste = true
        } 
    }
    if (n[0] == n[4] && n[4] == n[8] && n[8] == xouzero){
        teste = true
    }
    if (n[2] == n[4] && n[4] == n[6] && n[6] == xouzero){
        teste = true
    }
    if (cont == 8){
        teste = true
    }
    return teste
}
function parar(){
    if (verificar()){
        return true
    } else {
        return false
    }
}

console.log()

function jogar(){
    exibirmatriz()
    rl.question(`Vai jogar ${xouzero} em qual posição?? `, (jogada) => {
        console.log(" ")
        console.log("-------------------------------------------")
        console.log(" ")
        if (verificacao(jogada)){
            jogada = Number(jogada) - 1
            n[jogada] = xouzero
        } else {
            console.log("ERRO DE DIGITAÇÃO, REPITA UM COMANDO VÁLIDO")
        }
        console.log()
        if(parar()){
            exibirmatriz()
            console.log("FIM DE JOGO, TEMOS UM VENCEDOR")
            rl.close();
        } else {
            xouzero = xouzero == 'X' ? 'O' : 'X'
            cont++
            jogar()
        }
    });
}    

jogar()