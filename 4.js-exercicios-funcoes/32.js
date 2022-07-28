function mediaArtDoVetor (array) {
  let somaDosNumeros = 0

  for (x in array) {
    somaDosNumeros += array[x]
  }

  return (somaDosNumeros / array.length).toFixed(2)
}

console.log(mediaArtDoVetor([8.2, 7.8, 10, 9.5, 6.7]))