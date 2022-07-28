// Usado para loops com quantidade determinada de repetições 

let contador = 1

 while (contador <= 10) {
  console.log(`Contador = ${contador}`)
  contador++
} 


for(let i = 1 ; i <= 10; i++) {
  console.log(`i = ${i}`)
}

const notas = [3.2, 7.7, 8,5, 3.8, 8.9 ]
for(let i = 0; i < notas.length; i++) {
  console.log(`Nota: ${notas[i]}`)
}

// FOR IN (passa dos indices do array)

const notas2 = [6.7, 7.4, 9.8, 9.1, 7.7, 3.4]

for (let i in notas2) {
  console.log(`Nota ${i}:`, notas2[i])
}

const pessoa = {
  nome: 'Ana',
  idade: 19,
  peso: 71
}

for(let atributo in pessoa) { //passa pelos atributos do object
  console.log(`${atributo} = ${pessoa[atributo]}`)
}