// importar usando commonsJs (require)
// Essas constantes armazenam o que você importou dos módulos especificados
const moduloA = require('./moduloA') // './' referencia algo que está dentro do sistema
const moduloB = require('./moduloB.')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)