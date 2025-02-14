// declaração de variáveis
var listanumeros = []
var cont = 0
var maior = 0
var menor = 100
var soma = 0
var media = 0


function adicionar(){
    var resultados = document.getElementById('resultados')
    var n1 = document.getElementById('inumeroadicionado')
    var finalizacao = document.getElementById('finalizacao')
    finalizacao.style.display = 'none'

    // VERIFICAÇÕES
    //verificação de nº repetido
    let checagem = false
    for ( var i=0 ; i<listanumeros.length ; i++ ){
        if ( n1.value == listanumeros[i] ){
            checagem = true
        }
    }
    //verificação de valor
    if (n1.value < 1 || n1.value > 100 || n1=='' || checagem){
        window.alert('[ERRO] - O número deve estar entre 1 e 100 e não repetido.')


        //CÓDIGOS
    } else {
        //código para lista
        n1 = Number(n1.value)
        listanumeros.push(n1)
        resultados.innerHTML += (`<p>Valor ${n1} adicionado.</p>`)
        //código para finalização
        cont++
        soma = soma + n1
        media = (soma / cont)
        if (n1 > maior){
            maior = n1
        }
        if (n1 < menor){
            menor = n1
        }
    }
    n1 = document.getElementById('inumeroadicionado')
    n1.value = ''
    n1.focus()
}


function finalizar(){
    if (listanumeros.length==0){
        window.alert('[ERRO] - Adicione um número.')
    } else {
        finalizacao.style.display = 'block'
        finalizacao.innerHTML = (`
            <p>Ao todo, temos ${cont}</p>
            <p>O maior valor informado foi ${maior}</p>
            <p>O menor valor informado foi ${menor}</p>
            <p>Somando todos os valores, temos ${soma}</p>
            <p>A média dos valores digitados é ${media.toFixed(2)}</p>`)
    }
}


//função de refresh da página
function refresh() {
    location.reload(); // Recarrega a página
}


//adicionar número com enter
document.getElementById('inumeroadicionado').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionar();
    }
})