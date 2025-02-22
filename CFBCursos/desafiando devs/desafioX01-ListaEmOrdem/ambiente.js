//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//VARIÁVEIS
let arranjo = []

//FUNÇÃO DE VALIDAÇÃO DO INPUT
function validacao(input){
  return input==Number(input) ? true : false
}

//FUNÇÃO DE ORDEM
function ordem(input){
  console.log("Tamanho do input: " + input.length)
  for ( i=0 ; i<input.length ; i++){
    arranjo.push(input[i])
  }
  for ( i=0 ; i<input.length ; i++){
    for ( c=i ; c<input.length ; c++){
      if ( arranjo[i] > arranjo[c]){
        let suporte = arranjo[i]
        arranjo[i] = arranjo[c]
        arranjo[c] = suporte
      }
    }
  }
  console.log("Número arranjado: ")
  for (i=0 ; i<input.length-1 ; ++i){
    process.stdout.write(arranjo[i] + ", ")
  }
  process.stdout.write(arranjo[input.length-1])
  console.log("")
  console.log("")
}

//CÓDIGO GERAL
function rodar(){
  rl.question('Digite seu número: ', (input) => {
    if (validacao(input)){
      console.log(`Número válido!`);
      ordem(input)
      rl.close();
    } else {
      console.log(`Número não válido! Tente novamente!`);
      console.log(`-----------------------------------`);
      rodar()
    }
  });
}

rodar()

//tempo 25min