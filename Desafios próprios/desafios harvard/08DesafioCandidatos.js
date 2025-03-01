//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Função para "promisificar" o rl.question
function questionAsync(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}



//VARIÁVEIS
let candidatos
let candidatosMAP = new Map()



//VERIFICAÇÃO QUE TEM MAIS DE UM CANDIDATO
function verificarNomes(input){
    if (input.trim()=="" ){ //verificar que não é entrada vazia
        return false
    }
    if (!(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(input))){ //verificar que não tem número
        return false
    }
    if (input.split(" ").length-1==0){ //verificar se tem um espaço
        return false
    } else {
        return true
    }
}
//VERIFICAÇÃO QUE TEM PELO MENOS UM ELEITOR
function verificarEleitores(numeroEleitores){
    return Number.isInteger(numeroEleitores) && numeroEleitores>0 ? true : false
}
//VERIFICAR SE VOTOU EM UM CANDIDATO
function verificarVoto(votoEleitor){
    return Number.isInteger(votoEleitor) && votoEleitor>0 && votoEleitor<=candidatos.length ? true : false
}



//PASSO 1: RECEBER NOME DOS CANDIDATOS
function passo1(){
    rl.question('Digite o nome dos candidatos separado por espaço: ', (inputUsuario) => {
        input = inputUsuario
        if (verificarNomes(input)){
            console.log("Candidatos definidos com sucesso!")
            console.log("")
            candidatos = input.trim().split(" ").filter(nome => nome !== "") //SEPARAR NOMES
            passo2()
        } else {
            process.stdout.write("Precisa-se de pelo menos dois nomes, sem números.")
            console.log("Tente novamente.")
            passo1()
        }
    });
}



//PASSO 2: RECEBER NÚMERO DE ELEITORES
function passo2(){
    rl.question('Digite o número de eleitores: ', (inputUsuario) => {
        numeroEleitores = Number(inputUsuario)
        if (verificarEleitores(numeroEleitores)){
            console.log("Número de eleitores definido com sucesso!")
            console.log("")
            passo3()
        } else {
            process.stdout.write("Precisa-se de pelo menos dois nomes, sem números.")
            console.log("Tente novamente.")
            passo2()
        }
    });
}



//PASSO 3: RECEBER VOTOS
async function passo3(){
    let qntVotos = 0
    for (elemento of candidatos){
        candidatosMAP.set(elemento, qntVotos)
    }
    console.log("--------------------")
    console.log(candidatosMAP)
    console.log("LISTA DE CANDIDATOS:")
    for (i=1 ; i<=candidatos.length ; i++){
        console.log(`Candidato ${i}: ${candidatos[i-1]}`)
    }
    console.log("")
    for (i=0 ; i<numeroEleitores ; i++){
        const inputUsuario = await questionAsync(`Eleitor ${i+1} - digite o número do candidato para votar: `)
        const votoEleitor = Number(inputUsuario)
        if (verificarVoto(votoEleitor)){
            console.log("Número de eleitores definido com sucesso!")
            candidatosMAP.set(candidatos[votoEleitor-1], candidatosMAP.get(candidatos[votoEleitor-1])+1)
        } else {
            console.log("Sempre digite um número de candidato válido.")
            console.log("A votação será reiniciada.")
            passo3()
        }
    }
    rl.close();
    console.log(candidatosMAP)
}

passo1()