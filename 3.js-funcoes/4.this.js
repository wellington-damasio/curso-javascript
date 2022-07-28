const pessoa = {
  saudacao: 'Bom dia!' ,
  falar( ) {
    console.log(this.saudacao) // this aponta para const {obj} pessoa
  }
}

pessoa.falar()
const falar = pessoa.falar //this aponta para const falar
falar()

const pessoa2 = {
  saudacao: 'Boa Noite',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa2.falar()

// FUNÇÃO BIND
const falarDePessoa = pessoa2.falar.bind(pessoa) // amarramos o 'this' ao objeto 'pessoa'
falarDePessoa()

