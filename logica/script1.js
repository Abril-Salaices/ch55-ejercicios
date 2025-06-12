let counter = 0;
const username= prompt ("Hola, ingresa tu nombre de usuario: ");
const age = prompt ("Ahora ingresa tu edad:  ");
const favoriteMovies = [];
//vamos a pedir 5 peliculas primero
for( let i=1; i<=5; i++){
  //los strings dentro de `` se conocen como string literal,
  //concatenan variables y texto de una forma mas sencilla y legible
  favoriteMovies.push(prompt(`Ingresa la pelicula numero: ${i}`));
  //equivalente a "ingresa la pelicula numero" + i + ":";

}
console.log(`Hola soy ${username} tengo ${age} y mis peliculas favoritas son: `);

while(counter< favoriteMovies.length){
  console.log(`Mi pelicula numero ${counter +1} es: ${favoriteMovies[counter]}`);
  counter ++;
}
