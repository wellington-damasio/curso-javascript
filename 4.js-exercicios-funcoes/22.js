function calcularValorAnuidade (mes, valor) {
  const juros = 0.05
  let montante =  0

  if (mes > 0 &&  mes < 13) {
    montante = valor * (1 + juros)**(mes - 1 )
    montante = montante.toFixed(2)
  }
  
  return montante
}
console.log(calcularValorAnuidade(2, 120))
console.log(calcularValorAnuidade(3, 120))