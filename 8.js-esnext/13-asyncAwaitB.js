function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max)
        [min, max] = [max, min]
    
    return new Promise( (resolve, reject) => {
        const fator = max -  min + 1
        const random = parseInt(Math.random() * fator) + min

        if(numerosProibidos.includes(random)) {
            reject('Numero Proibido')
        } else {
            resolve(random)
        }
    })
}

async function gerarMegaSena(qtdDeNumeros) {
    const numeros = []
    for(let _ of Array(qtdDeNumeros).fill()) {
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
    
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)