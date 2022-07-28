function contarCaracteres (caractere, string) {
    let numeroDeCaracteres = 0

    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) == caractere) {
            numeroDeCaracteres++
        }
    }

    return numeroDeCaracteres
}

// console.log(contarCaracteres('a', 'Ana gosta de arma'))
console.log(contarCaracteres('a', 'Ana gosta de arma'))