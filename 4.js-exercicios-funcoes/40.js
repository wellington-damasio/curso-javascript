function notasConceituais (vetorDeNotas) {

  for (x in vetorDeNotas) {

    if (vetorDeNotas[x] >= 0 && vetorDeNotas[x] < 5) {
      console.log('Nota: ' + vetorDeNotas[x] + '; Conceito: D')
    } else if (vetorDeNotas[x] >= 5 && vetorDeNotas[x] < 7) {
      console.log('Nota: ' + vetorDeNotas[x] + '; Conceito: C')
    } else if (vetorDeNotas[x] >= 7 && vetorDeNotas[x] < 9) {
      console.log('Nota: ' + vetorDeNotas[x] + '; Conceito: B')
    } else if (vetorDeNotas[x] >= 9 && vetorDeNotas[x] < 10) {
      console.log('Nota: ' + vetorDeNotas[x] + '; Conceito: A')
    } else {
      console.log('Nota inválida')
    }

  }

}

notasConceituais([7, 8, 9, 1, 0 ,3, -1])
