// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' // EVITE criar atributos dentro de Object.prototype

const avo = {attr1: 'A', attr3: 'E'}
const pai = { __proto__: avo, attr2: 'B'} // __proto__: nome-do-'pai' === protótipo (herança)
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr2, filho.attr0, filho.attr1, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status () {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status ( ) {
        return `${this.modelo}: ${super.status()}` // super.status == chamar função 'status' do protótipo
    }
}

// Object.setPrototypeOf (define relação de herança (filho, pai) entre dois objetos)
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(20)

console.log(ferrari.status())