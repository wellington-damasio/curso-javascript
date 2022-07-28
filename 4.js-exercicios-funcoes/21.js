function planoDeSaude (idade) {
  const valorFixo = 100
  if (idade < 10) {
    console.log(`Valor: R$${valorFixo + 80}`)
  } else if (idade >=10 && idade <= 30) {
    console.log(`Valor: R$${valorFixo + 50}`)
  } else if (idade > 30 && idade <= 60) {
    console.log(`Valor: R$${valorFixo + 95}`)
  } else if (idade > 60) {
    console.log(`Valor: R${valorFixo + 130}`)
  } else {
    console.log("Idade inserida inválida")
  }
}

planoDeSaude(10)
planoDeSaude(9)