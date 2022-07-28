function menorNumero (array) {
    let menorNumero = array[0]

    for (i in array) {
        if(array[i] < menorNumero) {
            menorNumero = array[i]
        }
    }
    
    return menorNumero
}

console.log(menorNumero([12, 33, 44, 67, 2, 21]))