function esPalindromo(texto) {
  // Eliminar espacios, puntuación y convertir a minúsculas
  let limpio = texto
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  // Comparar el texto limpio con su reverso
  let invertido = limpio.split('').reverse().join('');
  return limpio === invertido;
}

// Pedir texto al usuario
let entrada = prompt("Ingresa una palabra o frase:");
let resultado = esPalindromo(entrada);

// Mostrar resultado
if (resultado) {
  console.log("✅ Es un palíndromo.");
} else {
  console.log("❌ No es un palíndromo.");
}
