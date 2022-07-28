function valoresNegativos (array) {
  let qtd = 0
  for (x in array) {
    if (array[x] < 0) {
      qtd++
    }
  }
  console.log(`Qtd de números negativos: ${qtd}`)
}

valoresNegativos([-1, 22, 33, -3, -66, -90, 0, 22, -9])