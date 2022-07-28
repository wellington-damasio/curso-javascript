const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa sai do array
console.log(pilotos)

pilotos.push('Verstappen') // Verstappen entra no array
console.log(pilotos)

pilotos.shift() //remove o primeiro (Vettel)
console.log(pilotos)

pilotos.unshift('Maldonado') // adiciona um elemento no primeiro indice (Maldonado)
console.log(pilotos)

// .splice pode adicionar ou remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Ocon') // adiciona Bottas e Ocon depois do Alonso[1]
console.log(pilotos)

// remover
pilotos.splice(3,1) // Tira Ocon
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array a partir do indice[2] do array pilotos (começa no Bottas, incluindo o mesmo)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(2, 4) // inclui o Bottas[2] e vai até o Verstappen[4] sem incluir o Verstappen[4]
console.log(algunsPilotos2)

