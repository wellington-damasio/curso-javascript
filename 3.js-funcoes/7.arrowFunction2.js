function Pessoa ( ) {
  this.idade = 0

  setInterval ( function ( ) {
    this.idade++
    console.log(this.idade)
  }, 1000) 
}

function Pessoa2 ( ) {
  this.idade = 0

  setInterval ( ( ) => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}

new Pessoa // NaN, pois o 'this' está sendo chamado no contexto léxico diferente do original (Pessoa) 
new Pessoa2 // A ArrowFunction tem um 'bind' natural que mantem o contexto léxico do 'this.idade' em relação à 'Pessoa2'