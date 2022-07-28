function filtrarNumero(array) {
    let arrayDeNumeros = array.filter(seForNumero)

    function seForNumero (e) {
        return typeof e === "number"
    }

    return arrayDeNumeros
}

console.log(filtrarNumero([12, 7, 8, 'a', '22', 'else', false]))