//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
    return a + b
}

imprimirSoma(2, 3)

//função com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(1, 2))