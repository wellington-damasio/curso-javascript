const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) //cria um Object já com um protótipo; filha1.create(__proto__ = pai)
filha1.nome = 'Ana'
console.log(filha1.nome)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: true, enumerable: false}
})

filha2.nome = 'Carla' // writable: false; significa que não dá para mudar o valor de 'nome'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}.`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha1) {
    filha1.hasOwnProperty(key) ? // filha1 tem propriedade própria? caso contrário é herança
        console.log('Propriedade própria: ' + key) : console.log(`Por herança: ${key}`)
}