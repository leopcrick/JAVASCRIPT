//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//CÓDIGO GERAL
function rodar(){
    rl.question('Digite seu texto: ', (input) => {
        console.log("")
        for (i=0 ; i<input.length ; i++){
            if(input[i].charCodeAt()>=65 && input[i].charCodeAt()<=90){
                let suporte = input[i].charCodeAt()-64
                process.stdout.write(String(suporte))
            } else if (input[i].charCodeAt()>=97 && input[i].charCodeAt()<=122) {
                let suporte = input[i].charCodeAt()-96
                process.stdout.write(String(suporte)+" ")
            }
        }
        console.log("")
        rl.close()
    })
}

rodar()

//TEMPO: 16min