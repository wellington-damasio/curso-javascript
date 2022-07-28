function paresComPares (array) {

    function parIndicePar (element, index) {
        return element % 2 == 0 && index % 2 == 0
    }

    return array.filter(parIndicePar)
}

console.log(paresComPares([12, 2, 8, 88, 98, 86, 76, 54, 22]))