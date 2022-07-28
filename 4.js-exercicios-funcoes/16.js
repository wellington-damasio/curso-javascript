function basicCalculator (number1, operator , number2) {
  switch (operator) {
    case '+':
      return number1 + number2
      break

   case '-':
      return number1 - number2
      break
      
    case '*':
      return number1 * number2
      break

    case '/':
      return number1 /  number2
      break

    default:
      return "We can't make that calculation for you now, sorry!"
  }
}

console.log(basicCalculator(12, '+', 13))
console.log(basicCalculator(12, '-', 13))
console.log(basicCalculator(12, '*', 13))
console.log(basicCalculator(12, '%', 13))