const nome = 'Rebeca'
const concat = 'Olá, ' + nome + '!'

//templateString: é o `` e ${} <---- p chamar variável pra fazer interpolação

const template = `
Olá, ${nome}!
`

console.log(concat, template)
console.log(`1+1 = ${1+1}`)

//função arrow (arrow function)
//pode chamar função dentro de expressoes

const up = text => text.toUpperCase()
console.log(`Ei... ${up, ('Cuidado')}!`)