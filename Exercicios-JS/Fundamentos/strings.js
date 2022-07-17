const escola = "Cod3r"

console.log(escola.charAt(4)) //determinado caracter da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // codigo do caracter da string
console.log(escola.indexOf('3')) //indice do caracter

console.log(escola.substring(1)) // cancela o primeiro numero / letra
console.log(escola.substring(0, 3)) //cancela o 1 e o 3 numero / letra

console.log('Escola'.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))