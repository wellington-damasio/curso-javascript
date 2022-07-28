function quantasNotas (valor) {
  let notas = [100, 50, 10, 5, 1]
  let qtd = 0

  for (let x in notas) {
    if (valor / notas[x] > 0) {
      qtd = Math.floor(valor / notas[x])
      valor %= notas[x]
    }

    if (qtd > 0) {
      console.log(`${qtd} notas(s) de RS${notas[x]}`)
    }
  }
}

quantasNotas(118)