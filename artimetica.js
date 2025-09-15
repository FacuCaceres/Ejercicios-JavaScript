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

function cuentaCadena(txt) {
    let cadena = txt;
    if (typeof txt === 'string') {
        cadena = txt;
    } else {
        return 'El tipo de dato ingresado no es un string';
    }

    return `La cadena de texto ingresada "${cadena}" tiene "${cadena.length}" carateres.`
};

function recortaCadena(txt, posicion) {
    let rta = txt.slice(txt, posicion);
    return rta;
};

function textoAstring(txt, separador) {
    let arregloDeTexto = txt.split(separador);
    /*     for (let i = 0 ; i < arregloDeTexto.length ; i++){
            console.log(`Posisión "${i}" texto "${arregloDeTexto[i]}"`)
        } */
    return arregloDeTexto;

};

function repiteTexto(txt,valorN) {
    for (let i = 0; i < valorN; i++) {
        console.log(`Posición ${i} caracter ${txt[i]}`)
        txt+= txt
    }
    return txt + txt;
}



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
