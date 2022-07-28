const fabricantes = ['Mercedes', 'BMW', 'Audi', 'Ferrari', 'Aston Martin', 'McLaren', 'Ford', 'Chevrolet', 'Lamborghini', 'Paganini', 'Tesla', 'Volkswagen', 'Fiat']

function imprimir (nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

// CALBACK == imprimir( ), para cada elemento do array, é chamado a função imprimir( )
fabricantes.forEach(imprimir) // .forEach passa por cada elemento do Array

function imprimirSomenteNome (nome) {
  console.log(`${nome}`)
}

fabricantes.forEach(imprimirSomenteNome)

/*
CONCLUSÃO: Em arrays, quando se passa dois parâmetros e chama-os, é entendido que:
 * 1. O primeiro parâmetro corresponde ao conteúdo dos índices 
 * 2. O segundo parâmetro corresponde ao index
*/

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas) {
  if(notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}

console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(function (nota) { // .filter é a callback function que filtra os elementos de um array de acordo com certo critério e retorna os verdadeiros
  return nota <7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter( (nota) => nota <7)
console.log(notasBaixas3)

// Jeito Mais Bonito
const notasMenoresQue7 = (nota) => nota < 7
const notasBaixas4 = notas.filter(notasMenoresQue7)
console.log(notasBaixas4)