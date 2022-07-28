function soma( ) {
  let soma = 0
  for (let i in arguments) {
    soma += arguments[i]
  }
  return soma
}

// Arguments no caso é o Array da Função.  Toda função, quando não é passado nenhum parâmetro, cria um array no qual os parâmetros inseridos na CHAMADA da função são armazenados. Neste array podemos fazer o tratamento de Dados

console.log(soma())
console.log(soma(1))
console.log(soma(1, 3, 6 , 7, 34))
console.log(soma(1, 3, 5, 7, 'Teste')) // soma e concatena
console.log(soma('a', 'b', 'Pao'))
