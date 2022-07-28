function factorial (number) {
  // n! = n . (n - 1)

  let multiplicador = number - 1
  let resultado = number

  while (multiplicador > 0) {
  resultado *= multiplicador

    multiplicador--
  }
  return resultado
}

console.log(factorial(10))
console.log(factorial(3))
console.log(factorial(7))
