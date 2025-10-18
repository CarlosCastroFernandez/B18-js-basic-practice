/* 
EJERCICIO 13:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con el título y la descripción 
de las mejores peliculas ordenadas de mejor a peor, siendo las mejores aquellas cuya 
valoración es superior a la valoración media de todas las películas
*/
export function exercise13(movies) {
  // Escribe tu solución aquí
return mejorValoradas(movies);
}

function mejorValoradas(movies){
  let array=[];
  const media=movies.reduce((acumulador,inicio)=>inicio.rating+acumulador,0)/movies.length;
  movies.forEach(element => {
  if(element.rating>media){
    let {title,description}=element;
    array.push({title,description});
  }   

  });
  return array;
}
