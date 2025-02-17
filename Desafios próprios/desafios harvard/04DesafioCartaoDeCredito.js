//POSSIBILITA A ENTRADA DE DADOS NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//VERIFICAÇÃO DE INPUT
function verificar(){
    return verificacao.length == 16 ? true : false
}

//CÁLCULOS DO CARTÃO
function calcular(){
    let inicial = 1000000000000000
    var mat = []
    let suporte1
    let soma = 0

    //PASSO 1: A PARTIR DO PENÚLTIMO DÍGITO DO Nº DO CARTÃO, RETIRAR 1 DÍGITO A CADA 2
    for ( i=0 ; i<8; i++){
        suporte1 = Math.floor(numero / inicial)
        mat.push(suporte1)
        numero = numero % (inicial / 10)
        inicial = inicial / 100
    }
    console.log(mat) 
    console.log("Multiplicando por 2: ") 

    //PASSO 2: MULTIPLICAR CADA UM DOS DÍGITOS RETIRADOS NO PASSO 1 POR 2
    for ( i=0 ; i<8; i++){
        mat[i]*=2
    }
    console.log(mat)
    
    //PASSO 3: SOMAR OS DÍGITOS DE CADA UM DOS VALORES MULTIPLICADOS NO PASSO 2
    for ( i=0 ; i<8; i++){
        soma = soma + (mat[i]%10)+Math.floor(mat[i]/10)
    }
    console.log("O valor da soma dos dígitos é " + soma)
    
    //PASSO 4: A PARTIR DO ÚLTIMO DÍGITO DO Nº DO CARTÃO, RETIRAR 1 DÍGITO A CADA 2
    inicial = 10000000000000000
    numero = numerocartao
    for ( i=0 ; i<9; i++){
        suporte1 = Math.floor(numero / inicial)
        mat[i] = suporte1
        numero = numero % (inicial / 10)
        inicial = inicial / 100
    }
    console.log(mat) 
    
    //PASSO 5: SOMAR OS DÍGITOS DE CADA UM DOS VALORES MULTIPLICADOS NO PASSO 4 COM A SOMA DO PASSO 3
    for ( i=0 ; i<9; i++){
        soma = soma + (mat[i]%10)+Math.floor(mat[i]/10)
    }
    console.log("O valor da soma dos dígitos é " + soma)
    if (soma == 20){
        console.log('O NÚMERO DIGITADO É VÁLIDO')
    } else {
        console.log('O NÚMERO DIGITADO NÃO É VÁLIDO')
    }
}

//número cartão que temos: 4003600000000014
//número cartão que temos: 4003601234500014 -->> 4 0 6 1 3 5 0 1
function rodar(){
    rl.question('Digite o número do seu cartão de crédito: ', (input) => {
        verificacao = input
        if (verificar()){
            numero = Number(input)
            numerocartao = numero
            calcular()
            rl.close();
        } else {
            console.log("O número fornecido não tem o tamanho correto.")
            rodar()
        }
    });
}

rodar()