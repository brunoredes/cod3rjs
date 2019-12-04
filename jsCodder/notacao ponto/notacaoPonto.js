// notação ponto serve para acessar os objetos da classe

console.log(typeof console) //objeto
console.log(typeof Math.ceil(6.1)) //objeto

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = 'bola2'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //expor como publico
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)