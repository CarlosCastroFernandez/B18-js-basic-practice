/* 
EJERCICIO 10:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar funciones auxiliares de ejercicios anteriores si las declaraste.
*/
export function exercise10(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const sintilde=(join=>{
    join =join.replace("á","a");
    join =join.replace("é","e");
    join =join.replace("í","i");
    join =join.replace("ó","o");
    join =join.replace("ú","u");
    join =join.replace(" ","");
    return join;
  })

  const splitArray=(string)=>{
    let join=sintilde(string);
    join=join.toLowerCase().split("");
    return join;
  }

  let copiaArray=[...splitArray(string)];
  for (let i=0;i<copiaArray.length;i++){
      copiaArray[i]=alphabet.indexOf(copiaArray[i]);
    
  }
  return copiaArray;
  // Escribe tu solución aquí
}