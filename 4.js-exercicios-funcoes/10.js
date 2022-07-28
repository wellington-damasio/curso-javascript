function dividePerTree (number) {
  if (number < 0 && number %3 == 0)  {
    console.log("Divisble per 3, but it's a negative number")
  } else if (number % 3 == 0) {
    console.log('Divisible per 3')
  } else if (number % 3 != 0) {
    console.log('Not divisible per 3')
  } else if (number == 0) {
    console.log('Zero is not divisible')
  } else {
    console.log('Make sure you typed a number')
  }
}

dividePerTree(3)
dividePerTree(6)
dividePerTree(9)
dividePerTree(33)
dividePerTree(367)
dividePerTree(0)
dividePerTree(-3)