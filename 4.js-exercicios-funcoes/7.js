function bhaskara (ax2, bx, c) {
  const delta = (bx**2) - 4* ax2 * c

if(delta < 0) {
  return 'Delta negativo'
}

  let x1 = (-bx  + Math.sqrt(delta)) / 2 * ax2
  let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2

  // Check if x1 or x2 is not an interger, if not, make them 2 algarisms past floating point
  if (x1 % 1 != 0) {
    x1 = x1.toFixed(2)
  }

  if (x2 % 1 != 0) {
    x2 = x2.toFixed(2)
  }

  return [x1, x2]
}

console.log(bhaskara(3, -5, 1))