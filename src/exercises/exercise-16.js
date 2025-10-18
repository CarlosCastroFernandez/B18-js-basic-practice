/* 
EJERCICIO 16:
Escribe una función que devuelva un array que solo incluya el titulo de la pelicula mejor valorada de cada uno de estos actores: 
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks

Nota: asegurate que no hay titulos duplicados
*/
export function exercise16(movies) {
  const actors = ["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"];

  // Escribe tu solución aquí
  let mapa=new Map();
  movies.forEach(element => {
    mapa.set(element.title,element);
  });

  let arrayMejoresPelis=[];
  for(let i=0;i<actors.length;i++){
     arrayMejoresPelis.push(betterFilmByActor(mapa,i)[0]);
  }
  return arrayMejoresPelis;
 

}
  function betterFilmByActor(mapa,indice){
    let arrayMejores=[];
    let arrayValues=Array.from(mapa.values());
    arrayValues= arrayValues.filter(value=>value.actors.includes(actors[indice]));
    arrayValues=arrayValues.sort((a,b)=>b.rating-a.rating);
    arrayMejores.push(arrayValues[0]);
    return arrayMejores;
  }
