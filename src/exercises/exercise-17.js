/* 
EJERCICIO 17:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "This is a hashtag" se transforma en "#ThisIsAHashtag"
*/
export function exercise17(string) {
  // Escribe tu solución aquí


  return converter(string);
}
  function converter(string){
    let split=string.split(" ");
    let concatena="";
    for (let i=0;i<split.length;i++){
      if(i===0){
        concatena+="#";
      }
      concatena+=split[i][0].toUpperCase()+split[i].substring(1,split[i].length);
    }
    return concatena;
  }
