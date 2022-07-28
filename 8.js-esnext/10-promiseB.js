function gerarNumerosEntre (min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const random = parseInt(Math.random() * (max - min + 1) + min)
        resolve(random)
    })
}

gerarNumerosEntre(10, 20)
    .then(num => num * 10)
    .then(numX10 => `O número resultante é ${numX10}`)
    .then(console.log)
    
