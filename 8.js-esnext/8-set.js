// não aceita repetição / não indexado

const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Atletico-MG')
times.add('Real Madrid')
times.add('São Paulo')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco')) // Set é caseSensitive
times.delete('ABC') // Valores deletados não existentes não resultam em nada
times.delete('Vasco')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes) // Set transforma um array em um object com apenas valores {val1, val2, val3 ...}
console.log(nomesSet)

const arrayRepetidos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
const arraySet = new Set(arrayRepetidos)
console.log(arraySet)