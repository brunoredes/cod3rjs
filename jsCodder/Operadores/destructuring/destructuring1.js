// recurso do es6

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        Logradouro: 'Rua dos bobo',
        numero: 0
    }
}

//operador destructuring
const {
    nome, idade
} = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //desestruturando o objeto e atribuindo uma variavel à desestruturação do objeto
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero, cep)

const {conta:{ag, num}} = pessoa
console.log(ag, num)