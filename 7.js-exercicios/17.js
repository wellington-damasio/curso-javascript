function somarNumeros (array) {
    const somar = (acumulador, valorAtual) => acumulador + valorAtual

    let resultado = array.reduce(somar)
    return resultado
}

console.log(somarNumeros([12, 66]))