const caixa1=document.querySelector("#caixa1")

let musicas = new Set(["musica 1", "musica boa", "musica10"])

musicas.add("musica muito legal")
musicas.add("musica1")
musicas.add("musica 1")
musicas.add("a melhor musica")
musicas.add("musica 2")
musicas.add("a melhor musica")
musicas.add("a melhor musica")
musicas.add("musica10")


console.log(musicas)

for (let m of musicas){
    caixa1.innerHTML += m + "<br/>"
}

//SET É SEMELHANTE À ARRAY, SÓ NÃO ACEITA VALORES REPETIDOS. A MANIPULAÇÃO DA COLEÇÃO SET É SEMELHANTE À MANIPULAÇÃO DE COLEÇÃO MAP.