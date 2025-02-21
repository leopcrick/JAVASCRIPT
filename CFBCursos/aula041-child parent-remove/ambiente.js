const section1=document.querySelector("#section1")
const novoElemento = document.createElement("div")
novoElemento.innerHTML="ReactiveNative"
novoElemento.setAttribute("id", "c7")
novoElemento.setAttribute("class", "curso")
section1.appendChild(novoElemento)


const section2=[...document.querySelectorAll(".curso")]
console.log(section2)
section2.map((el)=>{
    el.addEventListener("click", (evt)=>{
        el.remove()
    })
})



//------------------------- criar divs da direita
const novoElemento2 = document.createElement("div")
novoElemento2.innerHTML="Irmão"
section1.parentNode.appendChild(novoElemento2)

const novaSection = document.createElement("section")
novaSection.setAttribute("id", "section1")
section1.parentElement.appendChild(novaSection)
const cursos = ["ReactNative", "CSS", "PHP", "MySQL", "JavaScript", "React", "HTML"]
cursos.map((el, chave)=>{
    const elementoCopiado=document.createElement("div")
    elementoCopiado.setAttribute("id", "lugar"+chave)
    elementoCopiado.innerHTML=el
    novaSection.appendChild(elementoCopiado)
    
    
    //--------------------------- deletar divs da direita
    const lixeira = document.createElement("img")
    lixeira.setAttribute("src", "lixeira.png")
    lixeira.style.width = "20px"
    elementoCopiado.appendChild(lixeira)
    lixeira.addEventListener("click", (evt)=>{
        evt.target.parentNode.remove()
    })
})
