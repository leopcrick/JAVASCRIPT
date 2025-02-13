function enviardados(){
    document.body.style.background='red'
    var anonascimento = window.document.getElementById('inascimento').value
    var sexo = window.document.querySelector('input[name="sexo"]:checked')
    var dataatual = new Date()
    var anoatual = dataatual.getFullYear()
    var idade = anoatual - anonascimento
    var mensagemleitor = window.document.getElementById('mensagemleitor')
    document.getElementById('imagem').style.display = 'inline'

    //texto superior
    if (sexo.value == 'M'){
        mensagemleitor.innerText = `Detectado um homem de ${idade} anos`
    } else {
        mensagemleitor.innerText = `Detectado uma mulher de ${idade} anos`
    }

    //imagens de acordo com sexo masculino
    if (idade < 6 && sexo.value == 'M'){
        imagem.src = 'imagens/bebemasc.png'
    } else if (idade < 12 && sexo.value == 'M'){
        imagem.src = 'imagens/criancamasc.png'
    } else if (idade < 18 && sexo.value == 'M'){
        imagem.src = 'imagens/adolescentemasc.png'
    } else if (idade < 45 && sexo.value == 'M'){
        imagem.src = 'imagens/adultomasc.png'
    } else if (idade < 60 && sexo.value == 'M'){
        imagem.src = 'imagens/meiaidademasc.png'
    } else if (idade >= 60 && sexo.value == 'M'){
        imagem.src = 'imagens/idosomasc.png'
    }
    //imagens de acordo com sexo feminino
    if (idade < 6 && sexo.value == 'F'){
        imagem.src = 'imagens/bebefem.png'
    } else if (idade < 12 && sexo.value == 'F'){
        imagem.src = 'imagens/criancafem.png'
    } else if (idade < 18 && sexo.value == 'F'){
        imagem.src = 'imagens/adolescentefem.png'
    } else if (idade < 45 && sexo.value == 'F'){
        imagem.src = 'imagens/adultofem.png'
    } else if (idade < 60 && sexo.value == 'F'){
        imagem.src = 'imagens/meiaidadefem.png'
    } else if (idade >= 60 && sexo.value == 'F'){
        imagem.src = 'imagens/idosofem.png'
    }

    
}

function refresh() {
    location.reload(); // Recarrega a página
}