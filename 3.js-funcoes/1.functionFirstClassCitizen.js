// Function em JS é considerado First-class Citizen, ou seja, pode ser tratada como um DADO

// Criar função de forma literal
function fun1 ( ) { }

// Armazenar função como variável
const fun2 = function ( ) { }

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]

console.log(array[0](12, 2))

// Armazenar em atributo de objeto
const obj = { }
obj.falar = function ( ) { return 'Opa!!!'}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
  fun()
}

run(function ( ) {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma (a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(1, 3) (5) //passa-se 2 parametros da primeira função e mais outro parametro da segunda função

const quatroMais = soma(1, 3)
quatroMais (5)