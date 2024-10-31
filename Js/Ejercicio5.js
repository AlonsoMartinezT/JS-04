/* Matriz de múltiplos
Crea una función que toma dos parámetros (número, longitud) y devuelve una matriz de longitud que contiene múltiplos del número.
Ejemplos:
- `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]` .
- `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]` . */

function arrayMultiplos(numeros, longitud){ // Toma los dos valores 
    let muultiplos = [] // Variable donde se guardaran los resultados
    for (let index = 1; index <= longitud; index++) { 
    muultiplos.push(numeros*index) //push agregamos los valores obtenidos a nuestra variable multiplos
    }  
    return muultiplos;
}
console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));