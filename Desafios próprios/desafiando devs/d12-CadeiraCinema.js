//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//CRIAR CADEIRAS
let cadeiras = new Map()
let numeroCadeiras


function verificar(){
    return true
}

//PRINTAR ESTADO DAS CADEIRAS
function printarCadeiras(numeroCadeiras){
    for (i=1 ; i<=numeroCadeiras ; i++){
        console.log(`Cadeira ${i}: ` + cadeiras.get(i))
    }
}

//CÓDIGO GERAL
function rodar(){
    console.log("------------------------------")
    rl.question('Digite o número de cadeiras: ', (input) => {
        numeroCadeiras = Number(input)
        for (i=1 ; i<=numeroCadeiras ; i++){
            cadeiras.set(i, "Disponível")
        }
        alugar()
    })
}

function alugar(){
    console.log("------------------------------")
    printarCadeiras(numeroCadeiras)
    rl.question('Digite qual cadeira deseja alugar (ou E para encerrar): ', (input) => {
        if (input == "E"){
            console.log("Seleção encerrada.")
            rl.close();
        } else {
            cadeira = Number(input)
            if (cadeiras.get(cadeira)=="Disponível"){
                console.log("Cadeira disponível, selecione outra.")
                cadeiras.set(cadeira, "Indisponível")
                alugar()
            } else {
                console.log("Cadeira indisponível, selecione outra.")
                alugar()
            }
        }
    })
}


rodar()

//TEMPO: 31 minutos