function estaEntre (numero, maximo, minimo, inclusivo = false) {
    if(inclusivo == true) {
        return numero <= maximo && numero >= minimo
    } else if(inclusivo == false) {
        return numero < maximo && numero > minimo
    } else {
        return 'Erro ao utilizar a função!'
    }
}

console.log(estaEntre(12, 13, 1))
console.log(estaEntre(7, 12, 1))
console.log(estaEntre(8, 8, 1, true))
console.log(estaEntre(8, 8, 1, false))