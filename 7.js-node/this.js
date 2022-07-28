console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports) // exports aponta para o mesmo object que module.exports

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) //false
    console.log(this === module.exports) // mesmo endereço, false
    console.log(this === global) //true

    this.perigo = 'Cuidado!!!' // estamos tornando perigo uma variável pública
}

logThis()

console.log(perigo) // conseguimos acessar o atributo perigo da função logThis globalmente

this.perigo = 'Vai morrer...'

console.log(this.perigo) // 'this.perigo' é diferente de 'perigo', pois aponta para module.exports, ao invés de global
console.log(perigo)

