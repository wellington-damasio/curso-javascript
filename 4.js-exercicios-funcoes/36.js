function multiplicarPorCada (arrayDeNumeros, numero) {

  let arrayDeMultiplicacoes = []

  for (let x in arrayDeNumeros) {
    arrayDeMultiplicacoes.push(arrayDeNumeros[x] * numero)
  }

  return arrayDeMultiplicacoes
}

console.log(multiplicarPorCada([3, 3, 6, 8], 2))

function multiplicarSeForMaiorQue5 (arrayDeNumeros, numero) {

  let arrayDeMultiplicacoes = []

  for (let x in arrayDeNumeros) {
    if (arrayDeNumeros[x] > 5) {
      arrayDeMultiplicacoes.push(arrayDeNumeros[x] * numero)
    }
  }

  return arrayDeMultiplicacoes
}

console.log(multiplicarSeForMaiorQue5([7, 8, 5, 2, 3, 1 , 9], 2))