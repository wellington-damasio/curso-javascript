const valor = 'Global'

function minhaFuncao() {
  console.log(valor)
}

function exec( ) {
  const valor = 'Local'
  minhaFuncao( )
  console.log(valor)
}

exec() // => Global
// As funções em JS têm consciência de onde foram declaradas, portanto, 'minhaFuncao' foi declara em escopo global, e foi neste escopo que procurou uma 'const valor'
// Ou seja, mesmo que tenha sido chamada em outra função (Contexto Léxico Local), a função foi declara no Global e nele agirá

// OUTRO EXEMPLO

const x = 'Global'

function fora( ) {
  const x = 'Local'

  function dentro( ) {
    return x
  }
  
  return dentro
}

const minhaFuncao2 =  fora( )

console.log(minhaFuncao2( )) // => 'Local', pois 'const x' no contexto léxico em que a 'function' foi criada é = 'Local'
