function maiorEMenor (arrayDeNumeros) {

  let maiorNumero = arrayDeNumeros[0]
  let menorNumero = arrayDeNumeros[0]

  for (x in arrayDeNumeros) {

    if (arrayDeNumeros[x] < menorNumero) {
      menorNumero = arrayDeNumeros[x]
    } else if (arrayDeNumeros[x] > maiorNumero) {
      maiorNumero =  arrayDeNumeros[x]
    }

  }
  return `Maior número: ${maiorNumero}
Menor número: ${menorNumero}`

}

console.log(maiorEMenor([10000, 2, 7 , 88, 99, 21, 1, -1, 22, 0 , -7, 999]))