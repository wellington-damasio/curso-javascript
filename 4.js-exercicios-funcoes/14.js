function meVendeUmaFruta (fruta) {
  switch (fruta) {
    case 'maçã': case 'maca': case 'maça':
      console.log('Não vendemos essa fruta aqui')
      break
    
    case 'kiwi':
      console.log('Estamos com escassez de kiwi')
      break

    case 'melancia': case 'melância':
      console.log('Aqui está, são 3 reais o quilo')
      break

    default:
      console.log('Fruta inválida')
  }
}

meVendeUmaFruta('maca')
meVendeUmaFruta('kiwi')
meVendeUmaFruta('melancia')
meVendeUmaFruta('alguma coisa')