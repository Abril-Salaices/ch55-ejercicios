function arrayMultiplos(numero, longitud) {
  let resultado = [];

  for (let i = 1; i <= longitud; i++) {
    resultado.push(numero * i);
  }

  return resultado;
}

// Ejemplos de uso:
console.log(arrayMultiplos(2, 10));    // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(arrayMultiplos(17, 6));    // [17, 34, 51, 68, 85, 102]