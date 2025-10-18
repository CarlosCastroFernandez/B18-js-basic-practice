/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>” 
Nota: vowels = "aeiou" (no incluyas acentos)
*/
export function exercise03(string) {
  const vowels = "aeiou";
  // Escribe tu solución aquí
  let result=0;
  let arrayString=string.split("");
  arrayString.forEach(string => {
    if (vowels.includes(string)) result++;
  });

  return `Number of vowels in '${string}' is ${result}`;
}
