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
