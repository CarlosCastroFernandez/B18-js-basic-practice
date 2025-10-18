/* 
EJERCICIO 14:
Escribe una función que pasándole "movies" y "categories" del archivo data.js
como parámetros filtra las películas que pertenezcan a la categoria "Drama" 
e incluye solo el título y la descripción.
*/
export function exercise14(movies, categories) {
  // Escribe tu solución aquí

  let array=movies.filter(value=>value.category===categories.drama)
      .map(({ title, description }) => ({ title, description }));

  return array;
}
