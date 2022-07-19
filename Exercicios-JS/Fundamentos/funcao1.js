// Funcao sem retorno
function imprimriSoma(a, b) {
    console.log(a + b)
}

imprimriSoma(2, 3)
imprimriSoma(2)
imprimriSoma(2 , 3, 4, 5, 6, 7, 8, 9)
imprimriSoma()

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())