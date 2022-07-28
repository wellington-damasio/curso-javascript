const a = 1
const b = 2
const c = 3

const obj1 = { a : a, b : b, c : c }
const obj2 = {a, b, c}

console.log(obj1)
console.log(obj2)



const nomeAttr = 'nota'
const valorAttr = 7.65
const idade = 17

const obj3 = { }

obj3[nomeAttr] = valorAttr
obj3.idade = idade

console.log(obj3)

const attrNome = 'Nome'
const nome = 'Maria'

obj4 = { [attrNome] : nome}

console.log(obj4)

const obj5 = {
    funcao1: function  ( ) {
        //...
    },

    funcao2 () {
        //...
    }
}

console.log(obj5)


