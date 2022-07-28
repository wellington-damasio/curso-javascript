function Pessoa( ) {
  this.idade = 0

  //setInterval chama a função em intervalos de tempo de (n)milissegundos
  setInterval(function( ) {
    this.idade++
    console.log(this.idade) 
  }.bind(this), 1000) // .bind(this) significa que 'this' aponta para pessoa
}

new Pessoa // this.idade não aponta para Pessoa, acho que aponta para o global do Node

function Pessoa2( ) {
  this.idade = 0
  const self = this // atribuindo 'this' à um constante, conseguimos o mesmo efeito do 'bind'

  setInterval(function( ) {
    self.idade++
    console.log(self.idade)
  }, 1000)
}

new Pessoa2