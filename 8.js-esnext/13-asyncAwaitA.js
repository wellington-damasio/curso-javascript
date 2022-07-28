function esperarPor(tempo = 2000) {
    return new Promise( (resolve) => {
        setTimeout(function() {
            resolve('Vishhh')
        }, tempo)
    })
}

// esperarPor(2000)
//     .then( () => console.log('Executando promise 1...'))
//     .then( () => console.log('Executando promise 2...'))
//     .then( () => console.log('Executando promise 3...'))

function retornarValor () {
    return new Promise(resolve => {
        setTimeout( () => resolve(10), 5000)
    })
}

async function executar() {
    const valor = await retornarValor()

    await esperarPor(3000)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1000)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(2000)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

executar()

async function executarDeVerdade () {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade ()
