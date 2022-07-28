let comparaComThis = function (param) {
  console.log(this === param)
}

comparaComThis(global) //contexto global == true
comparaComThis(this) // neste contexto, this == global, já que this == module.exports, this != this

const obj = { }
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // 'this' já não é mais global
comparaComThis(obj) // por efeito do 'bind', 'this' refere-se á 'obj'

let comparaComThisArrow = param => console.log(this === param) // 'let' em 'node' == 'module.exports'
comparaComThisArrow(global)
comparaComThisArrow(this) // this == module.exports && let == module.exports
comparaComThisArrow(module.exports) // true

comparaComThisArrow = comparaComThisArrow.bind(obj) // 'this' agora se refere à 'obj'
comparaComThisArrow(obj) // => false, o 'bind' natural da Arrow Function é mais forte que a função 'bind'
comparaComThisArrow(module.exports) // this continua sendo == module.exports para a Arrow Function

// 'this' em Arrow Function é associado ao contexto no qual o função foi escrita E NUNCA MUDA
