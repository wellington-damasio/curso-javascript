// nota <= 40 == reprovado
// if (nota + 2 % 5 = 0)|| (nota + 1 % 5 = 0) [ if nota % 5 < 3] arredonda
// if nota < 38 reprovado sem arredondamento 

function chequeAsNotas (nota) {
  if (nota > 0 && nota < 38) {
    return 'Reprovado'
  } else if (nota >= 38 && (nota + 2) % 5 == 0 ) {
    return `Aluno Aprovado: ${nota + 2}`
  } else if (nota >= 38 && (nota + 1) % 5 == 0) {
    return `Aluno Aprovado: ${nota + 1}`
  }  else if (nota < 0) {
    return 'Nota Inválida'
  } else {
    return `Aluno Aprovado: ${nota}`
  }
}

console.log(chequeAsNotas(12))
console.log(chequeAsNotas(38))
console.log(chequeAsNotas(44))
console.log(chequeAsNotas(41))
console.log(chequeAsNotas(-1))