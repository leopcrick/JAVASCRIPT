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