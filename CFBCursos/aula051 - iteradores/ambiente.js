const valores = [10, 8, 9, 15]
const it_valores = valores[Symbol.iterator]() //<<<----------------

console.log(valores)
console.log(it_valores.next()) //<<<<<---------
console.log(it_valores.next())
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next())
console.log(it_valores.next())

//SERVE PARA USAR EM FOR'S COM UM POUCO MAIS DE CONTROLE COMO PERCORRER O ARRAY, POR EXEMPLO PULAR DE 2 EM 2 OS ELEMENTOS ETC