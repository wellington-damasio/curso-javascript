// IF
function receberNota(nota) {
  if (nota > 7) {
    console.log('Aprovado')
  }
}

receberNota(8)
receberNota(6) //não retorna nada

// IF ELSE
function imprimirResultado (nota) {
  if (nota > 7) {
    return 'Aprovado'
  } else {
    return 'Reprovado'
  }
}

console.log(imprimirResultado(8.9))
console.log(imprimirResultado(6.9))
