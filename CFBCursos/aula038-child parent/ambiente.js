const section1=document.querySelector("#section1")
console.log(section1.children)
console.log(section1.children[0])
console.log(section1.children[4])
console.log(section1.children[section1.children.length-1])
console.log(section1.firstElementChild)
console.log(section1.lastElementChild)
console.log(document.getRootNode())




const section2=[...document.querySelectorAll(".curso")]
console.log(section2[0].getRootNode())
console.log(section2[0].ownerDocument)




console.log(section1.hasChildNodes())
console.log(section2[0].hasChildNodes())
console.log(section1.children.length)
console.log(section2[0].children.length)




section1.children[1].innerHTML="TESTE"




const section3 = document.querySelector(".singular")
console.log(section3.parentNode.parentNode.children[1])
section1.children[2].innerHTML=section1.children[1].innerHTML




const novoElemento = document.createElement("div")
novoElemento.innerHTML="ReactiveNative"
novoElemento.setAttribute("id", "c7")
novoElemento.setAttribute("class", "curso")
section1.appendChild(novoElemento)