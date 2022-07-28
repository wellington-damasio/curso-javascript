function calcularMedia (array) {
    let somaDosNumeros = array.reduce((x, y) => x + y)
    const qtdDeNumeros =  array.length
    return somaDosNumeros / qtdDeNumeros
}

console.log(calcularMedia([1, 2, 3, 4, 5]))