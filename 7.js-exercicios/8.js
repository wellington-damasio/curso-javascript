function multiplicacao (numero1, numero2) {
    const arrayMultiplicador = []

    for(numero2; numero2 > 0; numero2--) {
        arrayMultiplicador.push(numero1)
    } 
    return arrayMultiplicador.reduce( (x, y) => x + y)
}

console.log(multiplicacao(12, 7))
