const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual sua idade? ', (nome) => {
  console.log(`Olá, ${nome}!`);
  nome = Number(nome)
  console.log(nome + 10)
  rl.close();
});
