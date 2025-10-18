/* 
EJERCICIO 5:
Escribe una función que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
  exercise05('code') // result: "COoDddEeee"
  exercise05('list') // result: "LIiSssTttt"
  exercise05('function') // result: "FUuNnnCcccTttttIiiiiiOooooooNnnnnnnn"
*/
export function exercise05(string) {
  // Escribe tu solución aquí
  function cadenaRepetida(string){
    let result="";
    for (let i=0;i<string.length;i++){
       for( let u=0;u<i+1;u++){
        if(u===0){
          result+=string[i].toUpperCase();
        }else{
           result+=string[i].toLowerCase();
        }
        
       }
    }
    return result;
  }
  const result=cadenaRepetida(string);
  return result;
}
