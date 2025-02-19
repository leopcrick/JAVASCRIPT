const divs = [...document.querySelectorAll("div")]

divs.map((elemento)=>{
    elemento.addEventListener("click", ()=>{
        if (elemento.innerHTML == "Clicou aqui"){
            elemento.innerHTML = "Desclicou aqui"
        } else {
            elemento.innerHTML = "Clicou aqui"
        }
    })
})