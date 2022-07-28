// pessoa -> 123 -> {...}

const pessoa = {nome: 'João'}
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)

/*
pessoa -> 456 -> {...} ( pessoa está apontando para um novo endereço de objeto )
pessoa = {nome: 'Maria'}
*/

Object.freeze(pessoa) // congela completamente o objeto e você não consegue alterar nenhum de seus atributos

pessoa.nome = 'Maria'

console.log(pessoa)

pessoa.end = 'Rua ABC'

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Mateus'})
pessoaConstante.nome = 'Lucas'

console.log(pessoaConstante)