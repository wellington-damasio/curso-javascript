function retorneSemVogal (frase) {
    const vogal = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

    vogal.forEach( vogal => frase = frase.replace(vogal,''))

    return frase
}

console.log(retorneSemVogal('Eu gosto de pão'))