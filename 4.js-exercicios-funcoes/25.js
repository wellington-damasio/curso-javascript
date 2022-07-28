function exibirNumeros () {
  let numero = 1

  while (numero < 51) {
    console.log(numero)
    numero++
  }
}

exibirNumeros()

// MELHOR PRÁTICA

function exibirNumeros2 () {
  for (let numero = 1; numero < 51; numero++) {
    console.log(numero)
  }
}

exibirNumeros2()