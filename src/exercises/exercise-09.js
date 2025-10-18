/* 
EJERCICIO 9:
Genera un array de un determinado tamaño con números aleatorios entre dos valores
y calcula el menor y el mayor de estos números.
Pista: Usar Math.round() y  Math.random() viendo documentación

Ejemplo: 
  exercise09(5, 0, 100) 
  devuelve "The minimum number is 0 and the maximum number is 100 in [0,50,99,49,100]"
*/
export function exercise09(length, start, end) {
  // Escribe tu solución aquí
  let array=new Array(length);
  for (let i=0;i<array.length;i++){
    array[i]=Math.floor(Math.random() * (end - start + 1));
  }
  let arrayOfRandomNumbers=[...array].sort((a,b)=>a-b);
  let min=arrayOfRandomNumbers[0];
  let max=arrayOfRandomNumbers[arrayOfRandomNumbers.length-1]; 

  return `The minimum number is ${min} and the maximum number is ${max} in ${array}`;
}

