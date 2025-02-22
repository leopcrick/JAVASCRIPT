//RESOLVER EQUAÇÃO DE SEGUNDO GRAU
//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//VARIÁVEIS
let numero = 0 //suporte
let a = 0
let b = 0
let c = 0
let delta = 0
let x1 = 0
let x2 = 0


//VERIFICAÇÃO DE INPUTS
function verificacao(input){
    return !isNaN(input) && input.trim()!=""
}

rodarA()
// rodarB()
// rodarC()
// rodar()

function rodarA(){
    rl.question('Digite o valor de A: ', (input) => {
        numero = Number(input)
        if (verificacao(input)){
            a = numero
            rodarB()
            // rl.close();
        } else {
            process.stdout.write("O valor fornecido não é aceitável, tente novamente.")
            console.log("")
            rodarA()
        }
    });
}
function rodarB(){
    rl.question('Digite o valor de B: ', (input) => {
        numero = Number(input)
        if (verificacao(input)){
            b = numero
            rodarC()
            // rl.close();
        } else {
            process.stdout.write("O valor fornecido não é aceitável, tente novamente.")
            console.log("")
            rodarB()
        }
    });
}
function rodarC(){
    rl.question('Digite o valor de C: ', (input) => {
        numero = Number(input)
        if (verificacao(input)){
            c = numero
            rodar()
            rl.close();
        } else {
            process.stdout.write("O valor fornecido não é aceitável, tente novamente.")
            console.log("")
            rodarC()
        }
    });
}

function rodar(){
    console.log(`A função de segundo grau ficou: ${a}x²+${b}x+${c}`)
    //CÁLCULO DE DELTA
    delta = b * b - 4 * a * c
    if (delta < 0){
        console.log("A função não possui raíz")
    } else {
        x1 = (-b + Math.sqrt(delta))/(2*a)
        x2 = (-b - Math.sqrt(delta))/(2*a)
        console.log(`A função possui as raízes: ${x1} e ${x2}`)
    }
}

//23 minutos, sofri em conseguir fazer o usuário digitar primeiro a, dps b e só dps c