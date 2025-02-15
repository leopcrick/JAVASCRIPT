const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual seu nome? ', (nome) => {
    console.log(`Seu nome é ${nome}`);
    rl.close();
});
