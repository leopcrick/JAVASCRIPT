//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//VARIÁVEIS
let numerofrases = 0
let numeropalavras = 1
let numeroletras = 0

//FRASE 1: Olá! Meu nome é Leonardo. Qual o seu nome?   ------    31 letras, 9 palavras e 3 frases.
//FRASE 2: Vamos testar um pouco isso aqui? Acho que pode ser difícil, vamos ver se eu consigo fazer rápido. Espero que eu consiga! Não quero perder muito tempo nesse exercício. Tchau!  -------  30 palavras, 6 frases


//FUNÇÃO DE CONTAGEM
function contagem(){
    console.log(frase.length)
    i=0
    for ( i=0 ; i<= frase.length ; i++){
        if ( frase[i]== ',' || frase[i]== '.' || frase[i]== '!' || frase[i]== '?' ){
            numerofrases++
        }
        if ( frase[i]== ' '){
            numeropalavras++
        }
        numeroletras = frase.length - numerofrases - numeropalavras + 1
    }
}

function rodar(){
    rl.question('Escreva sua frase:  ', (input) => {
      frase = input
      contagem()
      console.log("Número de frases: " + numerofrases)
      console.log("Número de palavras: " + numeropalavras)
      console.log("Número de letras: " + numeroletras)
      console.log("Número total de caracteres: " + frase.length)
      rl.close();
    });
}

rodar()