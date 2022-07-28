function imprimirImpares (inicio = 0, fim = 100) {

  if (inicio > fim) { // 13, 12
    inicio = fim + inicio // 12 + 13 = 25
    fim = inicio - fim // 25 - 12 = 13
    inicio = inicio - fim // 25 - 13 = 12
    // inicio = 12, fim = 13
  }

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 == 1) {
      console.log(i)
    }
  }
}

imprimirImpares(16, 2)