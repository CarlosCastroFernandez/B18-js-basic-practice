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

  return `the string '${string}' is ${isIsogram ? "" : "not "}an isogram`;
}

function lettersOcurrences(string) {
  // Función ayudante sugerida que devuelve un objeto
  // donde las claves son las letras y los valores son
  // el número de veces que aparecen en la cadena (string)
}
