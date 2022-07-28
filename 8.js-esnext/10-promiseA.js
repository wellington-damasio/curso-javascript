// setTimeout(function () {
//     console.log('executando callback...')

//     setTimeout(function () {
//         console.log('executando callback...')
//     }, 2000)

//         setTimeout(function() {
//             console.log('executando callback...')
//         }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('executando promise...')
            resolve('Vishhh')
        }, tempo)
    })
}

esperarPor(3000) // 3segs
    .then(esperarPor()) // 2segs
    .then(esperarPor) // 0segs
    .then(texto => console.log(texto))