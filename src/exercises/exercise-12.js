/* 
EJERCICIO 11:
Escribe una función que pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js" devuelve un array con el título de las 
películas ordenadas alfabéticamente por el título.

Consejo: 
puedes definir en utils.js una función auxiliar para ordenar las cadenas
que recibe como parámetro dos cadenas y devuelve -1 si la primera es menor que la segunda, 
0 si son iguales y 1 si la primera es mayor que la segunda.
*/
export function exercise12(movies) {
  // Escribe tu solución aquí
}

function sortStrings(a, b) {
  const string1 = a.toLowerCase();
  const string2 = b.toLowerCase();

  if (string1 < string2) return -1;
  if (string1 > string2) return 1;
  return 0;
}
