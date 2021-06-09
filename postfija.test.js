const resolverPostfija = require('./app')


describe('Operaciones que devuelven valor null', () => {
    test(' ( a= 1+5/altura) ', () => {
        expect(resolverPostfija('a= 1+5/altura').resultado).toBe(null)
    })
    test(' (   (A+CSb) *2 + c     ) ', () => {
        expect(resolverPostfija('  (A+CSb) *2 + c     ').resultado).toBe(null)
    })
    test(' ( 1) ', () => {
        expect(resolverPostfija('1').resultado).toBe(null)
    })
    test(' ( &&&1_+2+3.5 ) ', () => {
        expect(resolverPostfija('&&&1_+2+3.5 ').resultado).toBe(null)
    })
    test(' ( (ab)+ c ) ', () => {
        expect(resolverPostfija('(ab)+ c ').resultado).toBe(null)
    })
    test(' ( (val1 + val2)*3 ) ', () => {
        expect(resolverPostfija('(val1 + val2)*3 ').resultado).toBe(null)
    })
    test(' ( (c-1)*5-a^b) ', () => {
        expect(resolverPostfija('(c-1)*5-a^b').resultado).toBe(null)
    })
})


describe('Operaciones sencillas que devuelven un valor ', () => {

    test('1+2', () => {
        expect(resolverPostfija('1+2').resultado).toBe(3)
    })
    test('1-2', () => {
        expect(resolverPostfija('1-2').resultado).toBe(-1)
    })
    test('1*2', () => {
        expect(resolverPostfija('1*2').resultado).toBe(2)
    })
    test('1/2', () => {
        expect(resolverPostfija('1/2').resultado).toBe(0.5)
    })
    test('2^2', () => {
        expect(resolverPostfija('2^2').resultado).toBe(4)
    })

})

describe('Operaciones complejas que devuelven un valor ', () => {
    
    test(' ( 15*2/3.5 )', () => {
        expect(resolverPostfija('15*2/3.5').resultado).toBe(8.571428571428571)
    })
    
    test(' ( ((1+5)*2)/3 )', () => {
        expect(resolverPostfija('((1+5)*2)/3 ').resultado).toBe(4)
    })
    test(' ( ((1+5)*2)^2 )', () => {
        expect(resolverPostfija('((1+5)*2)^2 ').resultado).toBe(144)
    })
    test(' 10/3*2', () => {
        expect(resolverPostfija('10/3*2').resultado).toBe(6.666666666666667)
    })
    
})

describe('Operaciones complejas que devuelven un output array en modo postfijo ', () => {
    
    test(` ( 15*2/3.5 => ['15','2','*','3.5','/'])`, () => {
        const arr = ['15','2','*','3.5','/']
        expect(resolverPostfija('15*2/3.5').outputArray).toEqual(arr)
    })
    
    test(` ( ((1+5)*2)/3 => ['1','5','+','2','*','3','/'])`, () => {
        const arr = ['1','5','+','2','*','3','/']
        expect(resolverPostfija('((1+5)*2)/3 ').outputArray).toEqual(arr)
    })
    test(` ( ((1+5)*2)^2 => ['1','5','+','2','*','2','^'])`, () => {
        const arr = ['1','5','+','2','*','2','^']
        expect(resolverPostfija('((1+5)*2)^2 ').outputArray).toEqual(arr)
    })
    test(` 10/3*2  => ['10','3','/','2','*']`, () => {
        const arr = ['10','3','/','2','*']
        expect(resolverPostfija('10/3*2').outputArray).toEqual(arr)
    })
    
})

describe('Operaciones sencillas que devuelven un output array en modo postfijo ', () => {

    test(`1+2 => [ '1','2','+' ]`, () => {
        const arr = [ '1','2','+' ]
        expect(resolverPostfija('1+2').outputArray).toEqual(arr);
    })
    test(`1-2 => [ '1','2','-' ]`, () => {
        const arr = [ '1','2','-' ]
        expect(resolverPostfija('1-2').outputArray).toEqual(arr);
    })
    test(`1*2 => [ '1','2','*' ]`, () => {
        const arr = [ '1','2','*' ]
        expect(resolverPostfija('1*2').outputArray).toEqual(arr);
    })
    test(`1/2 => [ '1','2','/' ]`, () => {
        const arr = [ '1','2','/' ]
        expect(resolverPostfija('1/2').outputArray).toEqual(arr);
    })
    test(`2^2 => [ '2','2','^' ]`, () => {
        const arr = [ '2','2','^' ]
        expect(resolverPostfija('2^2').outputArray).toEqual(arr);
    })

})