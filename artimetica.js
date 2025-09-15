function sumar (a,b,...c) {
    let resultado = a + b;
    c.forEach(function(n){
        resultado+= n;
    })
    return resultado;
};

function restar (a,b,...c) {
    let resultado = a - b;
    c.forEach(function(n){
        resultado-= n;
    })
    return resultado;
};
export const ejercicios = {
    sumar,
    restar
};
