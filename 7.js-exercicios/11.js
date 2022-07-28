function primeiroUltimo (array) {
    resultado = []

        resultado.push(array.shift())
        resultado.push(array.pop())
        
    return resultado 
}

console.log(primeiroUltimo([13, 3, 7]))