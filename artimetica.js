function sumar(a, b, ...c) {
    let resultado = a + b;
    c.forEach(function (n) {
        resultado += n;
    })
    return resultado;
};

function restar(a, b, ...c) {
    let resultado = a - b;
    c.forEach(function (n) {
        resultado -= n;
    })
    return resultado;
};

/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. 
miFuncion("Hola Mundo") devolverá 10.

2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.
 */
const cuentaCadena = (txt = "") => {
    let cadena = txt;
    if (!cadena) {
        return 'No hay datos ingresados';
    }
    else if (typeof txt === 'string') {
        cadena = txt;
    } else {
        return 'El tipo de dato ingresado no es un string';
    }

    return `La cadena de texto ingresada "${cadena}" tiene "${cadena.length}" carateres.`
}

const recortaCadena = (txt = '', posicion = '') => {
    let rta = null;
    if (!txt || !posicion) {
        return 'Algun dato TEXTO o POSICIÓN fueron ingresados vacíos';
    } else {
        rta = txt.slice(txt, posicion);
        return rta;
    }
};


const textoAstring = (txt = '', separador = '') => {
    let arregloDeTexto = null;
    if (!txt || !separador) {
        return 'Algunos parametros fueron ingresados';
    } else {
        arregloDeTexto = txt.split(separador);
        return arregloDeTexto;
    }


};

const repiteTexto = (txt='', veces='') => {
    let resultado = null;
    if(!txt || !veces){
        return 'Algunos parametros no fueron ingresados';
    } else if (typeof txt === 'string') {
        resultado = (txt + ' ').repeat(veces).trim();
        return resultado;
    } else {
        return 'El valor ingresado no es un texto';
    }

};



export const ejeciciosJon34 = {
    cuentaCadena,
    recortaCadena,
    textoAstring,
    repiteTexto
}

export const ejercicios = {
    sumar,
    restar
};
