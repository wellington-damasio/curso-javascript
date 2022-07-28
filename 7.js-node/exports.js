console.log(module.exports) // module.exports == object vazio
console.log(module.exports === this)
console.log(module.exports === exports)

// todos vão ser exportados
this.a = 1
exports.b = 2 // exports apenas altera o object de module.exports
module.exports.c = 3

// O único realmente exportado é o module.exports
exports = null
console.log(module.exports)

exports = { // Está mudando a referência de 'exports'
    nome: 'Teste'
}

console.log(module.exports)

// O único jeito de criar um novo object para ser exportado é usando module.exports
module.exports = {
    publico: true
}

console.log(module.exports)

// 'this' e 'exports' são só duas maneiras diferentes de referenciar o mesmo object o qual module.exports aponta