function progressaoAritmetica (n, a1, r) {
  let progressaoEscrita = [a1]
  

  let numeroDoTermoAdicional = 1

  for (let i = n; i > 0; i--) {
    progressaoEscrita.push(a1 + r * (numeroDoTermoAdicional))
    numeroDoTermoAdicional++
  }
  
  const somaDaProgressaoAritmetica = ( ( a1 + ( progressaoEscrita.pop() - r ) ) * n ) / 2

  return [progressaoEscrita, somaDaProgressaoAritmetica]
}

console.log(progressaoAritmetica(5, 1, 3))