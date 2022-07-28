// let e const
{
    var a =2
    let b = 3
    console.log(b) // b tem escopo de bloco
}

console.log(a)
// console.log(b) -> variavel b não está definida

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Mara' // ...tras == operador REST
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const {idade: velhice, nome: trouxa} = {nome: 'Pedro', idade: 99}
console.log(trouxa, velhice)