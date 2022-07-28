const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // -> undefined, ferrari não tem o atributo .prototype; objetos não tem .prototype, mas apontam para a função Object que tem o atributo .prototype (Object.prototype)
console.log(ferrari.__proto__) // chamar pai/avo/bisavo... (herança) do objeto (super-objeto)
console.log(ferrari.__proto__ === Object.prototype) // pai de {ferrari} === Object.prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // Object.prototype não tem um pai (herança)

function meuObjeto () {}

console.log(typeof Object, typeof meuObjeto) // Object === function
console.log(Object.prototype, meuObjeto.prototype) 