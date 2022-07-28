// Usado para loops com quantidade indeterminada de repetição

function getInteiroAleatorioEntre (min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima')

// DO WHILE

opcao = -1

do {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima')

