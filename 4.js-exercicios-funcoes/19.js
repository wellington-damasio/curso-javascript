function calculePrecoDoPedido (codigoDoPedido, quantidade) {
  switch(codigoDoPedido) {
    case 100:
      return `Item: Cachorro Quente
      Valor da compra: R$${(3 * quantidade).toFixed(2).replace('.',',')}`
      break

    case 200:
      return `Item: Hamburguer Simples
      Valor de compra: R$${(4 * quantidade).toFixed(2).replace('.',',')}`
      break

    case 300:
      return `Item: Cheeseburguer
      Valor de compra: R$${(5.5 * quantidade).toFixed(2).replace('.',',')}`
      break

    case 400:
      return `Item: Bauru
      Valor de compra: R$${(7.5 * quantidade).toFixed(2).replace('.',',')}`
      break

    case 500:
      return `Item: Refrigerante
      Valor de compra: R$${(3.5 * quantidade).toFixed(2).replace('.',',')}`
      break

    case 600:
      return `Item: Suco
      Valor de compra: R$${(2.8 * quantidade).toFixed(2).replace('.',',')}`
      break

    default:
      return 'Produto não existente'
  }
}



console.log(calculePrecoDoPedido(100, 2))
console.log(calculePrecoDoPedido(600, 3))
console.log(calculePrecoDoPedido(500, 7))
console.log(calculePrecoDoPedido(100, 6))
console.log(calculePrecoDoPedido(200, 2))