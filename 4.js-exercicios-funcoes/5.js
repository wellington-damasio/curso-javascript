function toMoney (number1, number2) {
  const soma = number1 + number2

  console.log(`R$${soma.toFixed(2).replace('.',',')}`)
}

toMoney(0.1, 0.2)