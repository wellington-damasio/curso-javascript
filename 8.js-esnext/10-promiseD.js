function funcionarOuNao (valor, chanceDeErro) {
    return new Promise ((resolve, reject) => {
        if(Math.random() < chanceDeErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    }) 
}

funcionarOuNao('testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        error => console.log(`Erro Especifico: ${error}`) //tratando erro especifico do método '.then'
    )
    .catch(error => console.log(`Erro: ${error}`))
    .then( () => console.log('Fim')) //depois do '.catch' não tem mais dados a serem pegos, mas via de regra vc coloca catch na ultima posição