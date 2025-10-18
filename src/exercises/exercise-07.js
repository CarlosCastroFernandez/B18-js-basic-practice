/* 
EJERCICIO 7:
Un reloj muestra: 
 - la hora (0 <= h <= 23) 
 - los minutos (0 <= m <= 59)
 - y los segundos (0 <= s <= 59).

 Escribe una funcion que calcule los millisegundos que han pasado desde 
 media noche 00:00:00 hasta la hora actual teniendo en cuenta que:

 - hay 1000 millisegundos en un segundo.
 - podemos obtener la hora, minutos y segundos con la función "getTime" .
*/
export function exercise07(date) {
  // Escribe tu solución aquí

  return `Milliseconds from midnight: ${ms}`;
}

function getTime(date) {
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}
