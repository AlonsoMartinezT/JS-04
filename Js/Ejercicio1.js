/* Suma de resistencias en serie

Calcular la suma de todas las resistencias conectadas en serie.
Ejemplos:
- `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` debería devolver `'23.5 ohmios'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` debería devolver `'123 ohmios'`. (8 + 15 + 100 = 123)

Nota: Este enfoque utiliza el valor absoluto de cada resistencia para garantizar que todos los valores sean positivos. */

function sumResistance(arreglo) {
    let SumaTotal = 0;
    for (let valores of arreglo) {
        SumaTotal += Math.abs(valores);
    }
    return SumaTotal + " ohmios";
}

console.log(sumResistance([-1, 5, 6, 3])); 
console.log(sumResistance([14,3.5,6])); 
console.log(sumResistance([8,15,100])); 




