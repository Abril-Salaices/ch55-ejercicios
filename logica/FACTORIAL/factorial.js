function contarHasta(n) {
  if (n < 1) return; // Caso base: detener si n es menor que 1
  contarHasta(n - 1); // Llamada recursiva
  console.log(n);     // Mostrar número en orden ascendente
}

// Ejemplo de uso:
contarHasta(5);
// Imprime: 1 2 3 4 5
