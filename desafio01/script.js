function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
/*     var hora = 19 */
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora < 6){
        imagem.src = 'madrugada.jpg'
        window.document.body.style.backgroundColor = 'black'
    } else if (hora < 12){
        imagem.src = 'manha.jpg'
        window.document.body.style.backgroundColor = 'rgb(70,140,230);'
    } else if (hora < 18){
        imagem.src = 'tarde.jpg'
        window.document.body.style.backgroundColor = 'rgb(230, 170, 70)'
    } else {
        imagem.src = 'noite.jpg'
        window.document.body.style.backgroundColor = 'rgb(0, 0, 50)'
    }
}
