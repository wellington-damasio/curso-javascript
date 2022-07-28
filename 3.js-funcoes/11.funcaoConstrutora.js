// A função Construtora é usada em OOP, funciona como um molde para objetos subsequentes
function Carro (velocidadeMaxima = 200, delta = 5) {

  //atributo privado
  let velocidadeAtual = 0

  //metodo publico
  this.acelerar = function ( ) { // this.functionName == metodo publico, que podem ser usados fora da função
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual =  velocidadeMaxima
    }
  }

  //metodo publico
  this.getVelocidadeAtual = ( ) =>  velocidadeAtual 
}

const uno = new  Carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 90)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
