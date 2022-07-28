// Class
class Pessoa {
  constructor(nome) {
    this.nome =  nome
  }

  falar( ) {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('João')
p1.falar()


// Função Construtora
function Pessoa2 ( nome ) {
  this.nome = nome // se não usar o 'this', você não terá acesso à variável no escopo fora da função

  this.falar = ( ) => console.log(`Meu nome é ${this.nome}`)
}

const julia = new Pessoa2('Julia')

julia.falar()
