
const resolverPostfija = require('./app');

console.log(resolverPostfija('x/b+(n+n2)/c'));
console.log(resolverPostfija('10/30+(1+25)/0'));
console.log(resolverPostfija('c+32/b*5+z'));
console.log(resolverPostfija('b=x+y/x*y'));
console.log(resolverPostfija('1+25/1*25'));
console.log(resolverPostfija('25+c/b*23'));

