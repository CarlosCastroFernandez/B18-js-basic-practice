/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
Nota: even = par | odd = impar
*/
export function exercise02(number) {
  // Escribe tu solución aquí
  let result=(number%2===0)?"par":"impar";
  return `Number ${number} is ${result}`;
}
