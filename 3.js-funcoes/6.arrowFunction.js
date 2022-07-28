// Função Comum
let dobro = function (a) {
  return 2 * a
}

// Função Arrow
dobro = (a) => {
  return 2 * a
}

// Função Arrow de uma linha com return implícito
dobro = a => 2 * a

console.log(dobro(Math.PI))

// Mais exemplos de função arrow
let ola = function ( ) {
  return 'Olá'
}

ola =  ( ) => 'Olá'
console.log(ola())

let hello = ( ) => console.log('Hello')
hello()