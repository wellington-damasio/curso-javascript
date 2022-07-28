function filtrarPorQuantidadeDeDigitos (numeros, quantidadeDesejada) {
    let resultado = []

    for(numero of numeros){
        const quantidadeDeDigitos = String(numero).length
        if(quantidadeDeDigitos === quantidadeDesejada)
            resultado.push(numero)
        }
        return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([12, 2, 22, 33, 899, 988, 876, 8877], 2))
