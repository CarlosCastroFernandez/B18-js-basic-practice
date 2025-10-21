/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite en el string cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}

Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/
export function exercise18(string) {
  // Escribe tu solución aquí
  let converter=sinTildes(string);
  let mapaReturn=contadorLetras(converter)
  return Object.fromEntries(mapaReturn);
}
  function sinTildes(string) {
    let sinTildes = string.toLowerCase();
    //Se pone expresion regular o redex para que eliminar todos de golpe.
    sinTildes = sinTildes.replace(/á/g, "a");
    sinTildes = sinTildes.replace(/é/g, "e");
    sinTildes = sinTildes.replace(/í/g, "i");
    sinTildes = sinTildes.replace(/ó/g, "o");
    sinTildes = sinTildes.replace(/ú/g, "u");
    sinTildes = sinTildes.replace(/\s/g, ""); 
    return sinTildes;
  }
  function contadorLetras(cadena){
    let contador=0;
    let mapa=new Map();
    let copiaCadena=cadena;
    let set=new Set(cadena.split(""))
    let arrayCadena=Array.from(set);
    for (let i=0;i<arrayCadena.length;i++){
      let letra=arrayCadena[i];
      while(cadena.indexOf(letra)!==-1){
        contador++;
        cadena=cadena.replace(letra,"");
      }
        mapa.set(letra,contador)
        contador=0;
    }
    return mapa;
  }

