/* Número dividido en mitades
Dado un número, devuelve el número dividido en sus mitades en una matriz.
Ejemplos:
- `numDiv(4)` debería devolver `[2, 2]` .
- `numDiv(10)` debería devolver `[5, 5]` .*/

function numDiv(numero){
    return [numero / 2, numero / 2] // El numero se divide entre 2 devolviendo la mitad 
}
console.log(numDiv(4));
console.log(numDiv(10));