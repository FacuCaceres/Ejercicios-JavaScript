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

const repiteTexto = (txt = '', veces = '') => {
    let resultado = null;
    if (!txt || !veces) {
        return 'Algunos parametros no fueron ingresados';
    } else if (typeof txt === 'string') {
        resultado = (txt + ' ').repeat(veces).trim();
        return resultado;
    } else {
        return 'El valor ingresado no es un texto';
    }

};


/* 
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") 
   devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.
   miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en 
   un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, 
   xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */



const invierteArreglo = (arr = '') => {
    let arregloInvertido = [];
    if (!arr || !Array.isArray(arr)) {
        return 'ERROR! Algunos datos en el parametro no fueron ingresados'
    } else {
        for (let i = arr.length - 1; i > -1; i--) {
            // console.log(`Posicion de I = ${i} Valor de I = ${arr[i]}`);
            arregloInvertido.push(arr[i]);
        };
        return arregloInvertido;
    };
};

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") 
   devolverá "odnuM aloH". */

const deTextoAarregloMetodoComplejo = (txt = '') => {
    let arreglo = [];
    if (!txt || typeof txt !== 'string') {
        return 'ERROR! Algún parametro no fue ingresado o fue ingresado un dato no valido';
    } else {
        for (let i = txt.length - 1; i > -1; i--) {
            arreglo.push(txt[i]);
        }
    }
    return arreglo.join('');
}

const deTextoAarregloSimple = (txt = '') => {
    let resultado = (!txt)
        ? 'ERROR! Algún parametro no fue ingresado o fue ingresado un dato no valido'
        : txt.split('').reverse().join('');
    return resultado;
}

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.
   miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const cuentaPalabras = (txt = '', palabra = '') => {
    let contador = 0;
    if (!txt || typeof txt !== 'string') return ' ERROR! El texto se encuentra vacío o no es un texto';
    if (!palabra || typeof palabra !== 'string') return 'ERROR! No ingresaste la palabra a buscar'

    let arregloDeTxt = txt.split(' ');
    for (let i = 0; i < arregloDeTxt.length; i++) {
        if (arregloDeTxt[i] === palabra) {
            contador++;
        };
    };
    return contador;

};

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en 
   un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

function esPalindromo(palabra) {
    // Normalizamos: pasamos a minúsculas y quitamos espacios
    let texto = palabra.toLowerCase().replace(/\s+/g, "");

    // Recorremos con for desde los extremos hacia el centro
    for (let i = 0; i < texto.length / 2; i++) {
        if (texto[i] !== texto[texto.length - 1 - i]) {
            console.log(texto[texto.length - 1 - i])
            return 'No es Palindromo'; // si alguna letra no coincide, no es palíndromo
        }
    }

    return 'Es palindromo'; // si todas coinciden, sí es palíndromo
}

export const ejerciciosJon36 = {
    invierteArreglo,
    deTextoAarregloMetodoComplejo,
    deTextoAarregloSimple,
    cuentaPalabras,
    esPalindromo,
};

export const ejeciciosJon34 = {
    cuentaCadena,
    recortaCadena,
    textoAstring,
    repiteTexto
};

export const ejercicios = {
    sumar,
    restar
};

