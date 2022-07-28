function buscarPalavrasSemelhantes (inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'profissional', 'arrojado']))