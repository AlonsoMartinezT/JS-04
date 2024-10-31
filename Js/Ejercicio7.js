/* Promedio antípoda
Dada una matriz, devuelva una matriz más corta siguiendo estos pasos:
- Dividir la matriz en dos partes iguales*. Si no son iguales, eliminar el elemento del medio para obtener dos matrices iguales.
- Sumar cada número de la primera parte con los números inversos de la segunda parte.
- Dividir cada número de la matriz resultante por 2.
Ejemplo:
- Para la matriz `[1,2,3,5,22,6]` , el resultado debe ser `[3.5, 12, 4]` . */
console.log("PROMEDIO ANTIPODA ")
function promedio(array) {
    const valores = array.length;
    const minimo = Math.floor(valores / 2);
    if (valores % 2 !== 0) {
        array.splice(minimo, 1);
    }
    const result = [];
    const nuevosValores = array.length; // Ajustamos la longitud
    for (let i = 0; i < nuevosValores / 2; i++) {
        const suma = array[i] + array[nuevosValores - 1 - i]; // Sumar elementos de la primera mitad con los de la segunda mitad invertidos
        result.push(suma / 2); // Calculamos el promedio 
    }
    return result; // Devolvemos el resultado
}

console.log(promedio([1, 2, 3, 5, 22, 6])); // [3.5, 12, 4]
