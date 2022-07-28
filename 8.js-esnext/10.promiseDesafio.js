const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise (resolve => {
        fs.readFile(caminho, function( _, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n')) // ['lina1', 'linha2', 'linha3']
    .then(linhas => linhas.join(', ')) // linha1, linha2, linha3
    .then(conteudo => `O valor final é ${conteudo}`)
    .then(console.log)