const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Object.keys (retorna as chaves de um object)
console.log(Object.keys(pessoa))

// Object.values (retorna os valores de um object)
console.log(Object.values(pessoa))

//Object.entries (retorna o array como umo vários arryays com chave/valor dentro)
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`${chave}: ${valor}`) 
    // Object.entries = objeto -> array;  forEach -> para cada array; ([chave, valor]) -> destructuring indice1 (chave) e indice2 (valor) de cada array
})

//Object.defineProperty (cria um atributo chave/valor dentro de um objeto e define algumas propriedades dessa atributo)
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '02/02/22'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015) (parecido com o .concat() em arrays)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 7

console.log(obj)