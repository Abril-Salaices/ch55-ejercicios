/*Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
Result example: "Time for bed after 10 seconds".
*/
function alarma(segundos, mensaje) {
  console.log(` Esperando ${segundos} segundos...`);

  setTimeout(() => {
    console.log(`${mensaje} after ${segundos} seconds.`);
  }, segundos * 1000); // Convertimos a milisegundos
}

// Ejemplo de uso:
alarma(10, " Time for bed");
// Muestra el mensaje después de 10 segundos