const fileSystem = require('fs')

// __dirname == diretório atual
const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fileSystem.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fileSystem.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') // já converte para object
console.log(config.db)

fileSystem.readdir(__dirname, (err, arquivo) => {
    console.log('Conteudo pasta...')
    console.log(arquivo)
})