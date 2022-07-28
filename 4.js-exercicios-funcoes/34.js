function trueOrFalse (string1, string2) {
    let resultado = true
    
    const arrayString1 = string1.toLowerCase().split("")
    const arrayString2 = string2.toLowerCase().split("")

    for (y in arrayString1) {
        for(let x = 0; x < arrayString2.length; x++) {
            if (arrayString2[x] === arrayString1[y]) {
                resultado = true
                break
            } else {
                resultado = false
            }
        }
    }

    return resultado
}

console.log(trueOrFalse('limao', 'oamil'))