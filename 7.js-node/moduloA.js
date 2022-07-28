console.log(this)

this.ola = 'Fala Pessoal' // this é um object
exports.bemVindo = 'Bem vindo ao Node!' // exports é um object
module.exports.ateLogo = 'Por hoje é isso pessoal'

// this == exports && exports == module.exports

console.log(this) 