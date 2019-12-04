//par nome/valor
const salve = 'opa!' //contexto léxico 1: local fisico no qual sua variavel foi definido no código

function exec(){
    const salve = 'Alo, alo' //contexto léxico 2
    return salve
}

//objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua dos bobo',
        numero: 0
    }
}

console.log(salve)
console.log(exec())
console.log(cliente)