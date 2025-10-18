/* 
EJERCICIO 19:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje.

Ejemplos:
"the string 'Code deco' is an isogram"
"the string 'hello world' is not an isogram"
*/
export function exercise19(string) {
  // Escribe tu solución aquí
  let mapaIterator=lettersOcurrences(string).values();
  let array=Array.from(mapaIterator);
  let isIsogram=array.every(valor=>valor===array[0]);

  return `the string '${string}' is ${isIsogram ? "" : "not "}an isogram`;
}

function lettersOcurrences(cadena) {
    cadena=sinTildes(cadena);
    let contador=0;
    let mapa=new Map();
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
  function sinTildes(string) {
    let sinTildes = string.toLowerCase();
    sinTildes = sinTildes.replace(/á/g, "a");
    sinTildes = sinTildes.replace(/é/g, "e");
    sinTildes = sinTildes.replace(/í/g, "i");
    sinTildes = sinTildes.replace(/ó/g, "o");
    sinTildes = sinTildes.replace(/ú/g, "u");
    sinTildes = sinTildes.replace(/\s/g, ""); // elimina todos los espacios
    return sinTildes;
  }
  console.log(exercise19("Code deco"));
