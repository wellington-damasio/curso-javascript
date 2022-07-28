// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto)) // não podemos adicionar atributos neste objeto

produto.nome = 'Borracha' // podemos mudar atributos
produto.descrição = 'Borracha escolar branca' // não podemos adicionar atributos
delete produto.tag // podemos excluir atributos

console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // não podemos adicionar atributos
delete pessoa.nome // não podemos excluir atributos
pessoa.idade = 29 // conseguimos alterar atributos/valores existentes

console.log(pessoa)

// Object.freeze = Object.seal + valores constantes 