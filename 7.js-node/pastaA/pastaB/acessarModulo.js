const modulo1 =  require('../../moduloA')

console.log(modulo1.bemVindo)
console.log(modulo1.ola)

const http = require('http') // http é um módulo core do node 

// http.createServer( (req, res) => {
//     res.write('Bom dia')
//     res.end()
// }).listen(8080)

const c = require('./pastaC') // importa o index.js de pastaC

console.log(c.ola)