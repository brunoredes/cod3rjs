//const a = {name: 'teste'}
////undefined
////a variavel tem um endereço no qual esse objeto está localizado
//const b = a
////recebendo o mesmo valor que a aponta
////apontam p mesmo lugar na memória
//b.name = 'opa'
////mudar a partir da constante b, de teste para opa
//a
////tambem mudou o valor p opa. Mudamos a partir de b, mas como b tambem armazena o valor de memoria, a gente iguala as coisas
////a e b têm referência do objeto
//a = 3 //nao é possivel mudar valor pq ele é constante
//let c = 3
//let d = c
//d++
//valor de d = 4
//valor de c = 3
//nesse caso, como valor é primitivo, foi feito cópia por valor 
//(cópia por valor na outra variavel, elas tendo valores independentes)


let valor //nao inicializada
console.log(valor)
valor = null //não tem nenhum valor e não tem nenhum endereço que aponta pra local de memória
//null é ausencia de valor. Você definiu valor, mas diz que ela não aponta pra nenhum local me memória
console.log(valor)
//console.log(valor.toString()) //nulo não tem referência ao toString no JS
const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined na mão.
console.log(!!produto.preco)
console.log(produto)

