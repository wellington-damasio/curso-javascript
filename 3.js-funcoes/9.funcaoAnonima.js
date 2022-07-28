// USOS COMUNS DA FUNÇÃO ANÔNIMA

//1)
const soma = (x, y) => x + y

//2)
const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b))
}

imprimirResultado(3, 4) //7

//3)
imprimirResultado(3, 4, function (x, y) { // algum numero com ,
  return  x / y
}) 
imprimirResultado(3, 4, (x, y) => x * 4) // 12

//4)
const pessoa = {
  falar: function ( ) {
    console.log('Opa!')
  }
}

pessoa.falar( )
