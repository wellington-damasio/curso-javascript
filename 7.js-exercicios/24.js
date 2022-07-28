function quantasPalavaras (string) {
    let stringToArray = string.split(' ')

    let numeroDePalavras = stringToArray.length

    return numeroDePalavras
}

console.log(quantasPalavaras('Eu gosto de pão'))