// estrategia 1 para gerar valor padrão
function soma(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}

console.log(soma(), soma(12), soma(1, 3, 2), soma(0, 0, 0)) // 0 + 0 + 0 = 3 ?
// 0 == false, 1 == true,      false || true == true,       0 || 1 == 1

// Estrategia 2, 3 e 4 para Valor Padrão 
function soma2(a, b, c) {
  a = a !== undefined ? a : 1 //caso seja diferente de undefined, retorne valor de [a], caso undefined retorne 1  ( 0 !== undefined)
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c // is NaN ? false return [c]value ( 0 !== NaN)
  return a + b + c
}

console.log(soma2(), soma2(12), soma2(1, 3, 2), soma2(0, 0, 0)) // 0 + 0 + 0 = 0

// Usando Valor Padrão do ECMAScript5
function soma3(a = 1, b = 2, c = 3) {
  return a + b + c
}

console.log(soma2(), soma2(12), soma2(1, 3, 2), soma2(0, 0, 0)) // 0 + 0 + 0 = 0
