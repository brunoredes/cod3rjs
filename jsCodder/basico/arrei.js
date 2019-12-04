const val = [7.7, 8.9, 6.3, 9.3]
console.log(val[0], val[3])
console.log(val[4])

val[4] = 10
console.log(val)
console.log(val.length)
//ideal é ter array de tipos únicos.
val.push({id: 3}, false, null, 'teste')
console.log(val)

console.log(val.pop()) //retirar valor do array
delete val[0] //tira elemento do array no indice propriamente dito (Funciona para objetos)
console.log(val)


console.log(typeof val)