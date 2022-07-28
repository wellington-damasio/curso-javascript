// Arrow Function
const soma = (a, b) => a + b // funções arrow são anônimas e devem ser atribuidas à variáveis
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // 'this' em Arrow Function está associado ao local no qual a função foi escrita
const lexico2 = () => console.log(this === module.exports)
const lexico3 = lexico1.bind({}) // this de lexico 1 (this === module.exports) -> true, ou seja continua apontando para module.exports
// Não é possível atrelar o 'this' de uma função arrow a outros elementos
lexico1()
lexico2()
lexico3()

// Parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log(null)

// Operador REST (função) / SPREAD (array's e object's)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(12, 22, 50, 2))