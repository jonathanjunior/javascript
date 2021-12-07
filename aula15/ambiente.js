let num = [5, 8, 2, 9, 3]

console.log(num)
console.log(`Nosso valor é o ${num}`)

num[3] = 6 //adiciona o valor 6 ao index 3
console.log(num)

num.push(7) //acrescenta o valor 7 no ultimo index
console.log(num)

console.log(num.length) //mostrar o comprimento do array

console.log(num.sort()) //ordenar os elementos em forma crescente, não esquecer de ()

console.log(num[0]) // mostrar o elemento que está na posição [0]

//escrever bonito na tela
for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

//forma simplicada para arrays
for(let pos in num) { //para cada posição em num
    console.log(num[pos])
}

console.log(num.indexOf(7)) //retorna a chave onde o valor 7 se encontra, caso falso retorna -1

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)