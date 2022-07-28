function dadosDoAluno (codigoDoAluno, nota1, nota2, nota3) {
  pesoMaiorNota = 4
  
  let arrayDeNotas = [nota1, nota2, nota3]
  let mediaPonderada = 0

  let maiorNota = arrayDeNotas[0]
  let menorNota = arrayDeNotas[0]
  let notaDoMeio = arrayDeNotas[0]
  // Procurar a maior nota
  for (i in arrayDeNotas) {
    if( arrayDeNotas[i] > maiorNota) {
      maiorNota = arrayDeNotas[i]
    }
  }

  // Procurar menor nota
  for ( i in arrayDeNotas) {
     if (arrayDeNotas[i] < menorNota) {
      menorNota = arrayDeNotas[i]
    }
  }
  // Procurar nota do meio
  for (i in arrayDeNotas) {
    if (arrayDeNotas[i] != maiorNota && arrayDeNotas[i] != menorNota) {
      notaDoMeio =  arrayDeNotas[i]
    } else if (arrayDeNotas[i] == maiorNota && arrayDeNotas[i] == menorNota) {
      notaDoMeio = arrayDeNotas
    }
  }

  // calcular mediaPonderada
  mediaPonderada = (maiorNota * pesoMaiorNota + menorNota * 3 + notaDoMeio * 3) / (pesoMaiorNota + 3 + 3)
  // Aprovado ou reprovado?
  let statusDoAluno = aprovadoOuReprovado(mediaPonderada)

  // Resultado da merda toda
  return `Código do Aluno: ${codigoDoAluno}
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
Média das Notas: ${(mediaPonderada).toFixed(2)}
Status: ${statusDoAluno}`
}

function aprovadoOuReprovado(mediaPonderada) {
  if (mediaPonderada >= 5) {
    return 'Aprovado'
  } else if (mediaPonderada < 5) {
    return 'Reprovado'
  } else {
    return 'Cálculo falhou'
  }
}



console.log(dadosDoAluno(123, 1, 2, 3))