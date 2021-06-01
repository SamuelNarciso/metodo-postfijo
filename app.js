module.exports = resolverPostfija = (linea = '') => {
    let operacion = [], pila = [], output = ''
    const operadores = {
        ')': { valor: null, simbolo: ')' },
        '(': { valor: null, simbolo: '(' },
        '^': { valor: 3, funcion: (a, b) => (Math.pow( (a*1), (b*1))), simbolo: '^' },
        '/': { valor: 2, funcion: (a, b) => ((1*a) / (b*1)), simbolo: '/' },
        '*': { valor: 2, funcion: (a, b) => ((1*a) * (b*1)), simbolo: '*' },
        '-': { valor: 1, funcion: (a, b) => ((1*a) - (b*1)), simbolo: '-' },
        '+': { valor: 1, funcion: (a, b) => ((1*a) + (b*1)), simbolo: '+' },
    }
    const alfabeto = {
        'a': true,
        'b': true,
        'c': true,
        'd': true,
        'e': true,
        'f': true,
        'g': true,
        'h': true,
        'i': true,
        'j': true,
        'k': true,
        'l': true,
        'm': true,
        'n': true,
        'ñ': true,
        'o': true,
        'p': true,
        'q': true,
        'r': true,
        's': true,
        't': true,
        'u': true,
        'v': true,
        'w': true,
        'x': true,
        'y': true,
        'z': true,

        'A': true,
        'B': true,
        'C': true,
        'D': true,
        'E': true,
        'F': true,
        'G': true,
        'H': true,
        'I': true,
        'J': true,
        'K': true,
        'L': true,
        'M': true,
        'N': true,
        'Ñ': true,
        'O': true,
        'P': true,
        'Q': true,
        'R': true,
        'S': true,
        'T': true,
        'U': true,
        'V': true,
        'W': true,
        'X': true,
        'Y': true,
        'Z': true,
    }


    const isaLetter = (letra = '') => (alfabeto[letra] ? true : false)


    //Metodos para revisar caracter por carac
    const revisar_caracter = (c) => (operadores[c] || !isNaN(c) || isaLetter(c)) ? true : false
    const revisar_linea = (linea = '') => {
        for (const caracter in linea) {
            if (!revisar_caracter(linea[caracter])) return false
        }
        return true;
    }

    const armar_input = (linea = "") => {
        let input_temporal = [], cifra = '', operador = '', caracteres_arr = linea.split('')
        while (caracteres_arr.length > 0) {
            if (!isNaN(caracteres_arr[0]) || isaLetter(caracteres_arr[0])) {
                // cifra += caracteres_arr[0]
                cifra += caracteres_arr.shift()
            } else {
                // operador = caracteres_arr[0]
                operador = caracteres_arr.shift()
                input_temporal.push(cifra, operador)
                cifra = '', operador = ''
            }
            
        }
        input_temporal.push(cifra, operador)
        return input_temporal.filter((i) => i != '')
    }

    const vaciar_pila = () => {
        while (pila.length > 0) {
            const antigu_valor_pila = pila.shift()
            operacion.push(antigu_valor_pila)
            output += antigu_valor_pila.simbolo
        }
    }
    const precedencia = (simbolo_revisar, ultimo_simbolo_pila) => {
        if (pila.length == 0) { pila.unshift(simbolo_revisar); return null }
        if (simbolo_revisar.valor == ultimo_simbolo_pila.valor) {
            const antiguo_valor_pila = pila.shift()
            operacion.push(antiguo_valor_pila)
            output += antiguo_valor_pila.simbolo
            pila.unshift(simbolo_revisar)
        } else if (simbolo_revisar.valor > ultimo_simbolo_pila.valor) {
            pila.unshift(simbolo_revisar)
        } else if (simbolo_revisar.valor < ultimo_simbolo_pila.valor) {
            vaciar_pila()
            pila.unshift(simbolo_revisar)
        }
    }
    const llenar_pilas = (linea) => {
        for (let i = 0; i < linea.length; i++) {
            const element = linea[i], operador = operadores[element];
            if (!operador) {
                operacion.push(element )
                output = output + element 
                continue;
            }
            (operador.valor) ? precedencia(operador, pila[0])
                : (operador.simbolo == ')') ? vaciar_pila() : null
        }
        vaciar_pila()
    }

    const resolver_operacion = () => {
        let arrTmp = []
        while (operacion.length > 0) {
            while (!isNaN(operacion[0])) arrTmp.unshift(operacion.shift())
            arrTmp.unshift(operacion.shift())
            let resultado = ''
            try { resultado = arrTmp[0].funcion((arrTmp[2]), (arrTmp[1])) }
            catch (error) { return null }

            for (let i = 0; i < 3; i++) { arrTmp.shift() }
            arrTmp.unshift(resultado)
        }
        return (arrTmp.length == 1) ? (arrTmp[0].toString() * 1) : null
    }



    if (!revisar_linea(linea)) return { /*error: true */ input: linea, output: output, resultado: null }

    const input = armar_input(linea);
    
    llenar_pilas(input)
    const resultado = resolver_operacion()
    return {
        // error: (resultado != null) ? false : true,
        input: linea,
        output,
        resultado,
    }
}

