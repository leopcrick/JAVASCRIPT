//ADICIONAR CURSO ------------------------------------------------------
const adicionar = document.querySelector("#adicionar")
adicionar.addEventListener("click", (evt)=>{
    //criando nova div
    let novaDiv = document.createElement("div")
    const section2 = document.querySelector("#section2")
    section2.appendChild(novaDiv)

    //criando label para input
    const inputCurso = document.querySelector("#icurso");
    const nomeCurso = inputCurso.value.trim();
    let novaLabel = document.createElement("label");
    novaLabel.innerText = nomeCurso;
    
    // Criando o input radio
    let novoInput = document.createElement("input");
    novoInput.setAttribute("type", "radio");
    novoInput.setAttribute("name", "curso");
    novoInput.setAttribute("value", nomeCurso); 
    
    // Adicionando elementos à div
    novaDiv.appendChild(novaLabel);
    novaDiv.appendChild(novoInput);
    
})


//REMOVER CURSO ------------------------------------------------------
const remover = document.querySelector("#remover")
remover.addEventListener("click", ()=>{
    let radioSelecionado = document.querySelector('input[type="radio"]:checked')
    radioSelecionado.parentElement.remove()
})


//MOSTRAR CURSO ADICIONADO--------------------------------------------
const cursoSelecionado = document.querySelector("#cursoSelecionado")
cursoSelecionado.addEventListener("click", ()=>{
    let radioSelecionado = document.querySelector('input[type="radio"]:checked')
    const section1 = document.querySelector("#section1")
    section1.lastElementChild.textContent=radioSelecionado.parentElement.firstElementChild.textContent
})
