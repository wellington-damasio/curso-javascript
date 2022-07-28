function imprimirMais (numero) {
    let resultado = ''

    for(i = numero; i > 0; i--) {
        resultado += '+'
    }

    return resultado
}

console.log(imprimirMais(8))