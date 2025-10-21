/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
Pasándole el string “Hi, I am learning Javascript” la función debe devolver “H,I m lrnng Jvscrpt”
Nota: vowels = "aeiouAEIOU" (no incluyas los acentos)
Atención: cuidado con vocales aisladas y con espacios en blanco dobles
*/
export function exercise04(string) {
  const vowels = "aeiouAEIOU";
  // Escribe tu solución aquí
  let result="";
  let  bandera=0
  for (let i=0;i<string.length;i++){

      if(string[i-1]===" "&&string[i+1]===" "&&vowels.includes(string[i])){
        bandera++;
        result+=string[i];
      }
    if( !vowels.includes( string[i])&&bandera===0){
          result+=string[i];
    }
    bandera=0;
  }


  return result;
}

