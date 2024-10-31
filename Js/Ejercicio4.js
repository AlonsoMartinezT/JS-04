/*Estado en línea
Mostrar el estado en línea de una lista de usuarios.
Ejemplo:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` debería devolver `'mockIng99, J0eyPunch y 1 más en línea'` . */
console.log("ESTADO EN LINEA");
function onlineStatus(users) {
    const count = users.length; // Contamos el número de usuarios
    if (count === 0) {
        return 'No hay usuarios en línea.'; // Si no hay usuarios
    } else if (count === 1) {
        return `${users[0]} en línea`; // Si hay un usuario
    } else if (count === 2) {
        return `${users[0]} y ${users[1]} en línea`; // Si hay dos usuarios
    } else {
        return `${users[0]}, ${users[1]} y ${count - 2} más en línea`; // Si hay más de dos
    }
}
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));