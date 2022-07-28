console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // criar arrays de forma literal é a melhor forma
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // -> undefined

aprovados[3] = 'Paulo' // método menos eficiente de adicionar elementos em uma array
aprovados.push('Abia')

console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length) // javascript simplesmente deixa os indexes 5 -> 8 como <empty>
console.log(aprovados[8] === undefined) // true

console.log(aprovados)

aprovados.sort() // faz uma alteração no array
console.log(aprovados) // ordena o array (em ordem alfabética)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Gustavo') // apaga, a partir do index[1], 1 elemento e substitui este elemento por 'Gustavo'
console.log(aprovados)
aprovados.splice(1, 2) // apaga, a a partir do index[1], 2 elementos
console.log(aprovados)

aprovados = ['Mateus', 'Maria', 'Renato', 'Magela'] 
console.log(aprovados)
aprovados.splice(1, 2, 'Vitor', 'Isabel') // apaga, a partir do index[1], 2 elementos e os substitui pelos nomes inseridos
console.log(aprovados)