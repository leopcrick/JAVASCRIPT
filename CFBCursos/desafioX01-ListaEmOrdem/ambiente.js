/* //POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//VARIÁVEIS
let numero

//FUNÇÃO DE VALIDAÇÃO DO INPUT


//FUNÇÃO DE ORDEM


//CÓDIGO GERAL
rl.question('Digite seu número: ', (input) => {
  numero = Number(input)
  console.log(`Olá, ${numero}!`);
  console.log(numero + 10)
  rl.close();
});
 */

//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Qual sua idade? ', (input) => {
  idade = Number(input)
  console.log(`Olá, ${idade}!`);
  console.log(idade + 10)
  rl.close();
});
