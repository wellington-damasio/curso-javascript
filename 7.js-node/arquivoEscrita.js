const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1298.99,
    desconto: 0.15
}

// fs.writeFile('./pastaA' + 'arquivoGerado.js', JSON.stringify(produto), err => {
//     console.log(err || 'Arquivo Salvo')
// })

fs.writeFile('./pastaA' + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo')
})