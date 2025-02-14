let num = [4, 30, 2, 1, 0]
num.sort()
console.log(`Nosso vetor é o ${num}`)
num[5]=5
console.log(`Nosso vetor é o ${num}`)
num.push(6)
num.push(6)
console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let pos=0; pos<num.length;pos++){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}

for (let pos in num){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
let posicao = num.indexOf(6)
console.log(posicao)