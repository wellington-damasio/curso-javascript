function sorteio(numero) {

    let numeroSorteado = Math.floor( Math.random() * (10 - 1)) + 1

    if (numero < 1 || numero > 10) {
        return `Insira um número entre 1 e 10`
    } else if(numero == numeroSorteado) {
        return `Parabéns! O número sorteado foi o ${numeroSorteado}`
    } else if (numero != numeroSorteado) {
        return `Que pena! O número sorteado foi o ${numeroSorteado}`
    } else {
        return `Insira um dado válido`
    }
}

console.log(sorteio(11))
console.log(sorteio(10))
console.log(sorteio(9))
console.log(sorteio(7))
console.log(sorteio(8))