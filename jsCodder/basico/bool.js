let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//transformar valor em true ou false

console.log('Situação p verdadeiros')
console.log(!!3) //forçando conversão p true
console.log(!!-1)
console.log(!! ' ')
console.log(!![ ])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('\n falsos')
console.log(!!0)
console.log(!!'' && !!null && !!undefined && !!NaN)

let nome = ''
console.log(nome || 'Desconhecido')