let selecionado = [...document.querySelectorAll("div")]
selecionado.map((elemento)=>{
    elemento.addEventListener("click", (suporte)=>{
        let el = suporte.target
/*         if ( el.classList.contains("selecionado")){
            el.classList.remove("selecionado")
        } else {
            el.classList.add("selecionado")} */ //todo o if foi substituido pela linha debaixo
        el.classList.toggle("selecionado")
    })
})

let transferir = document.querySelector("p")
transferir.addEventListener("click", ()=>{
    let atransferir1=[...document.querySelectorAll("#section1 > .selecionado")]
    let atransferir2=[...document.querySelectorAll("#section2 > .selecionado")]
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    atransferir1.forEach((divatransferir1)=>{
        section2.appendChild(divatransferir1); // Move a div para a section2
        divatransferir1.classList.remove("selecionado"); // Remove a classe "selecionado"
    })
    atransferir2.forEach((divatransferir2)=>{
        section1.appendChild(divatransferir2); // Move a div para a section2
        divatransferir2.classList.remove("selecionado"); // Remove a classe "selecionado"
    })
})