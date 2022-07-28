function construirArrayDe100 ( ) {
  let numeros = []

  let contador = 1 

  while (contador <= 100) {
    numeros.push(contador)
    contador++
  }
  return numeros
}


function descubraPar () {
  const numerosEmArray = construirArrayDe100()
  let numerosPares = []

  for (x in numerosEmArray) {
    if(numerosEmArray[x] % 2 == 0) {
      numerosPares.push(numerosEmArray[x])
    }
  }
  return numerosPares
}

console.log(descubraPar())



