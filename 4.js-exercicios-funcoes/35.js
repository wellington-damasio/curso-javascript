const vetorPilha = [1, 2, 3, 4, 5] 
const vetorAdicionar = [6, 7, 8, 9, 10]

function adicionarEmPilha (array1, array2) {

  for (x in array2) {
    array1.push(array2[x])
    console.log('Valor Adicionado: ' + array1)
  }
  console.log(array1)
}

adicionarEmPilha(vetorPilha, vetorAdicionar)
