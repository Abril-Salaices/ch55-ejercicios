/*Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
QUE NECESITO:
1. Preguntar por 10 numeros
2. Comparar los numerso ingresados
3. Evalaluar cual numero es mas alto
4. Mostrar el numero mas alto 
*/
let counter =0;
const num=[];
for (let i=1; i<=10; i++){
num.push(Number(prompt(`Ingresa el numero: ${i}` )));
}
let highest = num[0];
console.log(`Numeros ingresados: `);
while(counter<num.length){
  console.log(`numero ${counter +1} : ${num[counter]}`);
  if (num[counter]>highest){
    highest=num[counter];
  }
  counter ++;
}
console.log(`El numero mas alto es: ${highest}`);