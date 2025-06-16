/*Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.*/
//QUE NECESITO:
/* 
Dividir el numero en dos partes iguales.
Devolver esas dos mitades como un array.
*/
const numDiv = numero => [numero / 2, numero / 2];

console.log(numDiv(4));   // [2, 2]
console.log(numDiv(10));  // [5, 5]
console.log(numDiv(6));   // [3, 3]
console.log(numDiv(8));  // [4, 4]