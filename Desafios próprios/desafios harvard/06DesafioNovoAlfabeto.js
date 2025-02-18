//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//FRASE 1: Olá! Meu nome é Leonardo. Qual o seu nome?   ------    31 letras, 9 palavras e 3 frases.
//FRASE 2: Vamos testar um pouco isso aqui? Acho que pode ser difícil, vamos ver se eu consigo fazer rápido. Espero que eu consiga! Não quero perder muito tempo nesse exercício. Tchau!  -------  30 palavras, 6 frases

//VARIÁVEIS
let frase = 0
let suporte
let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
/* let alfabeto = new Array(26); */


//VERIFICAR INPUT DE ALFABETO ---- ADICIONAR VERIFICAÇÃO DE LETRAS REPETIDAS DPS
function verificacao(){
    return novoalfabeto.length==26 ? true : false
}


//TRANSFORM TRANSLATE LETRAS
function transformar(){
    for ( i=0 ; i<frase.length ; i++ ){
    if(frase[i].charCodeAt()>=65 && frase[i].charCodeAt()<=90){
        suporte = frase[i].charCodeAt() + novoalfabeto.indexOf(frase[i]) - alfabeto.indexOf(frase[i])
        if (suporte > 90){
            suporte = suporte - 25
            }
        if (suporte < 65){
            suporte = suporte + 25
            }
    } /* else if(frase[i].charCodeAt()>=97 && frase[i].charCodeAt()<=122){
        suporte = frase[i].charCodeAt()
        if (suporte > 122){
            suporte = suporte - 25
            }
        if (suporte < 97){
            suporte = suporte + 25
            }
    } */ else {
        suporte = frase[i].charCodeAt()
    }
    process.stdout.write(String.fromCharCode(suporte))
    }
    console.log("")
}
//ALFABETOS: JTREKYAVOGDXPSNCUIZLFBMWHQ ----- BCDEFGHIJKLMNOPQRSTUVWXYZA ------ ZABCDEFGHIJKLMNOPQRSTUVWXY ---- ABCDEFGHIJKLMNOPQRSTUVWXYZ
//CÓDIGO GERAL
function rodar(){
    console.log("--------INÍCIO--------------------------------------------------------------------")
    rl.question('Digite sua frase: ', (input) => {
        frase = input
        rl.question('Digite seu novo alfabeto: ', (input2) => {
            novoalfabeto = input2
            verificacao()
            console.log("")
            if(verificacao()){
                console.log("------INPUTS ACEITOS--------------------------------------------------------------")
                console.log("Sua frase foi: " + frase)
                console.log("Seu alfabeto foi: " + novoalfabeto)
                console.log("")
                console.log("Sua frase transformada fica: ")
                transformar()
                console.log("")
                console.log("------FIM DO PROGRAMA------------------------------------------------------------")
                rl.close();
            } else {
                console.log("------INPUTS NÃO ACEITOS---------------------------------------------------------")
                console.log("Seu alfabeto não é válido")
            rodar()
          }
        });
    });
}
rodar()
