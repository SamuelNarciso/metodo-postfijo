const resolverPostfija = require('./app')

const resultado1 = resolverPostfija('(1+ss2)*6')
const resultado2 = resolverPostfija('1+5')
const resultado3 = resolverPostfija('5-(24*2)/2')
const resultado4 = resolverPostfija('(1RR2)*1')
const resultado5 = resolverPostfija(' (((0011*3)-05*2 )/2)^2 ')
const resultado6 = resolverPostfija(' 2^3 ')
const resultado7 = resolverPostfija(' (2/3)4 ')



console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)
console.log(resultado6)
console.log(resultado7)