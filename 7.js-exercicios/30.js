function getSegundoMaiorNumero (arrayDeNumeros) {

    // Procurando indice do maior numero
    let indiceDoMaior = 0

    arrayDeNumeros.forEach( (numero, indice) => {
        if(numero > arrayDeNumeros[indiceDoMaior])
            indiceDoMaior = indice
    })

    // Retira o maior numero array utilizando o indice
    arrayDeNumeros.splice(indiceDoMaior, 1)

    // Procura o maior numero no novo array sem o primeiro maior numero
    let segundoMaior = arrayDeNumeros[0]
    
    arrayDeNumeros.forEach(numero => {
        if(numero > segundoMaior)
            segundoMaior = numero
    })

    return segundoMaior
}

console.log(getSegundoMaiorNumero([12, 33, 77, 20, 99 ]))