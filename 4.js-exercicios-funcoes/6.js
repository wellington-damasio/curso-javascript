function simpleInterest (initialCapital, interestRate, time) {
  const interest =  initialCapital * (interestRate / 100) * time
  return initialCapital + interest
}

console.log(simpleInterest(100, 10, 10))

function compoundInterest (initialCapital, interestRate, time) {
  return ` R$${(initialCapital * (1 + (interestRate / 100))**time).toFixed(2).replace('.',',')}`
}

console.log(compoundInterest(100, 10, 10))