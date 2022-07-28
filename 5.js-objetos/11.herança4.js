function meuObjeto ( ) { }
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__) 
// O protótipo de obj1 é meuObjeto.prototype. (objetos criados a partir de uma função tem como protótipo o .prototype dessa função) 

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function ( ) {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.nome = 'Ana'
console.log(obj1.falar())
obj2.falar() // herdou tanto o método .falar() quanto a propriedade 'nome' : 'Anonimo'

const obj3 = { } // obj3.__proto__ == Object.prototype
obj3.__proto__ = meuObjeto.prototype // obj3.__proto__ == meuObjeto.prototype
obj3.nome = 'Rafael'
console.log(obj3.falar())

// Resumindo...
console.log( (new meuObjeto).__proto__ === meuObjeto.prototype ) //true
console.log(meuObjeto.__proto__ === Function.prototype) //true
console.log(Function.prototype.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__ === null) // não há protótipo após o Object.prototype
console.log(obj1.__proto__ === meuObjeto.prototype)