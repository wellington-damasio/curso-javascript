function entre10E20 (arrayDeNumeros) {
  dentroDoIntervalo = 0
  foraDoIntervalo = 0

  for (x in arrayDeNumeros) {
    if(arrayDeNumeros[x] >= 10 && arrayDeNumeros[x] <=20 ) {
      dentroDoIntervalo++
    } else {
      foraDoIntervalo++
    }
  }

  return `Dentro do intervalo: ${dentroDoIntervalo} numero(s)
Fora do intervalo: ${foraDoIntervalo} numero(s)`
}

console.log(entre10E20([20, 10, 11, 21, 33, 78, 5, 6]))