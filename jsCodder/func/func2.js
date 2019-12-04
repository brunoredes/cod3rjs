//armazenando função em uma variável
const imprimirSoma = function (a, b) {//função anonima
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma arrow function em uma variável
const soma = (a, b) => {
    return a + b
}

//retorno implícito da arrow function
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))