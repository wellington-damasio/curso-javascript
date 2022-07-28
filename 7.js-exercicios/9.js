function repeticao (numero, numeroDeRepeticao) {
    const resultado = []

    for(let i = numeroDeRepeticao; i > 0; i--) {
        resultado.push(numero)
    }
    return resultado
}

console.log(repeticao(16, 6))