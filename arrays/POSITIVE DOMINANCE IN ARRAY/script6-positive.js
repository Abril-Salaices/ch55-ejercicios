function positiveDom(array) {
  let positivos = 0;
  let negativos = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positivos++;
    } else if (array[i] < 0) {
      negativos++;
    }
  }

  return positivos > negativos;
}

// Ejemplo de uso:
console.log(positiveDom([-1, -3, -5, 4, 6767])); // false
console.log(positiveDom([1, -1, 2, 3]));         // true
console.log(positiveDom([-2, -5, -9, 0]));       // false
