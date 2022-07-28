function gerarNumeroEntre (min, max, tempo) {
    if(min > max)
        [max, min] =  [min, max]
        
    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const random = parseInt(Math.random() * fator) + min
            resolve(random)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
       gerarNumeroEntre(1, 60, 4000), // 6°
       gerarNumeroEntre(1, 60, 304), // 2°
       gerarNumeroEntre(1, 60, 200), // 1°
       gerarNumeroEntre(1, 60, 1300), //4°
       gerarNumeroEntre(1, 60, 3000), // 5°
       gerarNumeroEntre(1, 60, 400), // 3º
       gerarNumeroEntre(1, 60, 5000) // 7°
    ])
}

console.time('promise')

gerarVariosNumeros() // retorna os números no array
    .then(numeros => console.log(numeros)) // imprime o array no console
    .then( () => console.timeEnd('promise')) // imprime o time no console