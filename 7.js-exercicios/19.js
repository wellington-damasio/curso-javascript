function totalDespesas (arrayDeProdutos) {
    let getPreco = arrayDeProdutos.map( e => e.preco)
    let somarPrecos = (acumulador, valorAtual) => acumulador + valorAtual
    return `R$${ (getPreco.reduce(somarPrecos).toFixed(2).replace('.',',') )}`
}

const produtos = [
    {nome: 'Celular', categoria: 'Eletronicos', preco: 2566.99},
    {nome: 'Tablet', categoria: 'Eletronicos', preco: 5110},
    {nome: 'Carrinho Hot Wheels', categoria: 'Brinquedos', preco: 250},
    {nome: 'Mesa', categoria: 'Casa', preco: 589.90}
]
console.log(totalDespesas(produtos))