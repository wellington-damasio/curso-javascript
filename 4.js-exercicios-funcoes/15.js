function pegaHatch (tipoDeCarro) {
  switch (tipoDeCarro) {
    case 'hatch':
      console.log('Compra efetuada com sucesso')
      break
    case 'sedan': case 'motocicleta': case 'caminhonete':
      console.log('Tem certeza que quer este tipo de modelo?')
      break
    default:
      console.log('Nós não trabalhamos com este tipo de modelo aqui')
  }
}

pegaHatch('hatch')
pegaHatch('sedan')
pegaHatch('motocicleta')
pegaHatch('ferrari')