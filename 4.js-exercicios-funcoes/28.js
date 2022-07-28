function parOuImpar (array) {
    let pares = 0
    let impares = 0
    for (x in array) {
        if(array[x] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    return `Qtd. de números pares: ${pares}
Qtd de números ímpares: ${impares}`
}

console.log(parOuImpar([12, 3, 21, 76, 98, 77, 81]))