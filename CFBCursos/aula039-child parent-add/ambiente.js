const section1=document.querySelector("#section1")

const novoElemento = document.createElement("div")
novoElemento.innerHTML="ReactiveNative"
novoElemento.setAttribute("id", "c7")
novoElemento.setAttribute("class", "curso")
section1.appendChild(novoElemento)



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
})

section1.setAttribute("class", "testeid")