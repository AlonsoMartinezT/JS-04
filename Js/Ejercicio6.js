/*Dominancia positiva en Array
Escriba una función para determinar si una matriz es positivamente dominante.
Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.
Ejemplo:
- `positiveDom([-1, -3, -5, 4, 6767])` debería devolver `false` .*/

console.log("DOMINACION POSITIVA EN ARRAY");
function positiveDom(numeros){
    let valoresPositivos = 0;
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > 0) {
            valoresPositivos++;
        }
    }
    return valoresPositivos > numeros.length / 2;

}

console.log(positiveDom([-1, -3, -5, 4, 6767]));
console.log(positiveDom([1, 2, 3, -4, -5])); 