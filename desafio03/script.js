//função de refresh da página
function refresh() {
    location.reload(); // Recarrega a página
}

//função de contagem
function contagem(){
    //variáveis:
    var iinicio = document.getElementById('iinicio')
    var ifim = document.getElementById('ifim')
    var ipasso = document.getElementById('ipasso')
    var mensagemcontagem = window.document.getElementById('mensagemcontagem')

    //verificação de preenchimento correto:
    if (iinicio.value == '' ||
        ifim.value == '' ||
        ipasso.value == '' || 
        ipasso.value <= 0 ){
            window.alert('ERRO DE DADOS')
    } else {
        mensagemcontagem.innerHTML = 'Contando: '
        
        //transformando variáveis de strings p/ numbers
        var iinicio = Number(document.getElementById('iinicio').value)
        var ifim = Number(document.getElementById('ifim').value)
        var ipasso = Number(document.getElementById('ipasso').value)
        
        //fazendo conta
        if(iinicio >= ifim + ipasso){
            while (iinicio >= ifim + ipasso){
                mensagemcontagem.innerText += `${iinicio} \u{1F680}`
                iinicio = iinicio - ipasso
            }
            mensagemcontagem.innerText += `${iinicio} \u{1F480}`
        } else {
            while (iinicio <= ifim - ipasso){
                mensagemcontagem.innerText += `${iinicio} \u{1F680}`
                iinicio = iinicio + ipasso
            }
            mensagemcontagem.innerText += `${iinicio} \u{1F480}`
        }
    }
}