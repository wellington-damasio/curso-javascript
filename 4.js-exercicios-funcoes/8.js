let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliaPontuacoes (stringPontuacoes) {
  let pontuacoes =  stringPontuacoes.split(',')
  let qtdQuebraRecords = 0
  let piorJogo = 1
  let maiorPontuacao = Number(pontuacoes[0])
  let menorPontuacao = Number(pontuacoes[0])

  for (let i = 1; i < pontuacoes.length; i++) {
    if (Number(pontuacoes[i]) > maiorPontuacao) {
      maiorPontuacao =  Number(pontuacoes[i])
      qtdQuebraRecords++
    } else if (Number(pontuacoes[i]) < menorPontuacao) {
      menorPontuacao = Number(pontuacoes[i])
      piorJogo = i + 1
    }
  }
  return [qtdQuebraRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))

// Quando comparar numericamente um Array que foi gerado a partir de uma string, use o 'Number(array)'