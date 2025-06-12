/*Reto de Programación: FizzBuzz
Descripción:

Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:

Si el número es múltiplo de 3, imprime "Fizz".

Si el número es múltiplo de 5, imprime "Buzz".

Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".

Si no es múltiplo de ninguno, imprime el número tal cual
QUE NECESITO:
1 100 Numeros
2 Crear un bucle que recorra 100 numeros
3. Si el numero es multiplo de 3, imprime "Buzz".
3.1 Ocupar la expresion numero %3
3.2 Es verdadero si el modulo es = 0
4. Si el numero es multiplo de 5, imprime "Buzz"
4.1 Ocupar la expresion numero %5
4.2 Es verdero si el modulo es = 0
5 Si el numero es multiplo de 3 y 5, imprime "FizzBuzz"
5.1 ocupar la expresion numero %3 y modulo %5
5.2 Es verddero solo y solo ambas expresiones son =0
6. En caso de no ser multiplo de ninguno imprime el numero
*/
let counter =1;
do {
  if(counter %3 === 0 && counter %5 === 0){
console.log(`El numero  ${counter } es FizzBuzz`);
  }
  else if(counter %3 === 0 ){
console.log(`El numero  ${counter } es Fizz`);
  }
  else if(counter %5 === 0 ){
console.log(`El numero  ${counter } es Buzz`);
  }
  counter++;
}while(counter <= 100);
