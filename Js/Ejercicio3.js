/*Sociedad secreta
Encuentra el nombre de una sociedad secreta basándose en la primera letra del nombre de cada miembro.
Ejemplos:
- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'` .
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'` .
- `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'` .
*/

console.log("SOCIEDAD SECRETA")
function secretName (array){ // Recibe un arreglo
    let secreto = [] // Se inicializa un arreglo vacio donde almacenaremos las letras
    for (let index = 0; index < array.length; index++) { // reccorremos cada elemento del arreglo
        secreto.push(array[index][0])  // push agrega la primera letra a let 'secreto' e index[0] nos arroja la primera letra de cada elemento
    }
    return `'${secreto.sort().join('')}'`; // Regresamos el valor y con sort las ordena y join las une en una cadena sin espacios
}
console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));
