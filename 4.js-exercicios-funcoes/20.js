function minimoDeNotas (valor) {
  // R$100, R$50, R$10, R$5, R$1
  // 118 = 1 de 100, 1 de 10, 1 de 5, 3 de 1
  let valorDescontado = valor

  let qtdDeNotas100 = 0
  let qtdDeNotas50 = 0
  let qtdDeNotas10 = 0
  let qtdDeNotas5 = 0
  let qtdDeNotas1 = 0

  while(valorDescontado > 0) {
    if(valorDescontado % 100 > 0 && valorDescontado >= 100) {
      qtdDeNotas100++
      valorDescontado -= 100
    } else if (valorDescontado % 50 > 0 && valorDescontado >= 50) {
      qtdDeNotas50++
      valorDescontado-= 50
    } else if (valorDescontado % 10 > 0 && valorDescontado >= 10) {
      qtdDeNotas10++
      valorDescontado -= 10
    } else if (valorDescontado % 5 > 0 && valorDescontado >= 5) {
      qtdDeNotas5++
      valorDescontado -= 5
    } else if (valorDescontado >= 1 && valorDescontado < 5) {
      qtdDeNotas1++
      valorDescontado -= 1
    }
  }

  if(qtdDeNotas100 > 0) {
    console.log(`${qtdDeNotas100} notas(s) de R$100`)
  }

  if(qtdDeNotas50 > 0) {
    console.log(`${qtdDeNotas50} notas(s) de R$50`)
  }

  if(qtdDeNotas10 > 0) {
    console.log(`${qtdDeNotas10} notas(s) de R$10`)
  }

  if(qtdDeNotas5 > 0) {
    console.log(`${qtdDeNotas5} notas(s) de R$5`)
  }

  if(qtdDeNotas1 > 0) {
    console.log(`${qtdDeNotas1} notas(s) de R$1`)
  }
}

console.log(minimoDeNotas(118))
