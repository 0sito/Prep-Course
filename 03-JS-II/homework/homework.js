// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  return(Math.max(x,y));
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"

  var rta;

  if (edad >= 18)
  {
    rta = "Allowed";
  }
  else
  {
    rta = "Not allowed";
  }

  return(rta);
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

  var rta; //Podría ser más creativo con los nombres quizás...

  if (status === 1)
  {
    rta = "Online";
  }
  else if (status === 2)
  {
    rta = "Away";
  }
  else
  {
    rta = "Offline";
  }

  return(rta);
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  var rta;
  
  if (idioma === "aleman")
  {
    rta = "Guten Tag!";
  }
  else if (idioma === "mandarin")
  {
    rta = "Ni Hao!";
  }
  else if (idioma === "ingles")
  {
    rta = "Hello!";
  }
  else
  {
    rta = "Hola!";
  }

  return(rta);
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  switch (color)
  {
    case "blue":
      return("This is blue");
    case "red":
      return("This is red");
    case "green":
      return("This is green");
    case "orange":
      return("This is orange");
    default:
      return("Color not found");
  }

  //Quizás sea mejor práctica usar una variable para agregar el "break"
  //que se usa en cada case de un switch, pero como "return" ya corta el proceso
  //me puedo dar ese lujo??
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return((numero === 10) || (numero === 5));
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

  return((numero < 50) && (numero > 20)); //Asumo que 20 y 50 NO cumplen esa condición.
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

  return(numero === Math.floor(numero));
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  var rta;

  if((numero % 3 === 0) && (numero % 5 === 0))
  {
    return("fizzbuzz");
  }
  else if(numero % 3 === 0)
  {
    return("fizz");
  }
  else if (numero % 5 === 0)
  {
    return("buzz");
  }
  else
  { 
    return(numero);
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.

  /*
    FEEDBACK: Estuve mucho tiempo para hacer este ejercicio, hasta que me avivé de mirar
              cómo está armado el test de esta consigna, y noté que no están considerada
              ninguna "jerarquía" de estas condiciones que nos piden, donde justo queda
              expuesto el ejemplo que usaron en el test que cumple 2 condiciones de esta
              función.

              Quizás cambiando ese ejemplo del test rápidamente arregla el problema para
              quienes hicimos este ejercicio en el orden que leimos la consigna, pero
              desconozco si en realidad la consigna tenía considerado estos potenciales
              conflictos.
  */

  if ((num1 < 0) || (num2 < 0) || (num3 < 0)) 
  {
    return("Hay negativos");
  }
  else if ((num1 > 0) && (num1 > num2) && (num1 > num3))
  { //Math.max() en este ejercicio no es correcto pq no excluye números iguales.
    return("Número 1 es mayor y positivo");
  }
  else if ((num1 === 0) || (num2 === 0) || (num3 === 0))
  {
    return("Error");
  }
  else if ((num3 > num1) && (num3 > num2))
  {
    return(num3 + 1);
  }
  else
  {
    return(false);
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  

  for (var i = numero - 1; i > 1; i--)
  {
    if (numero % i === 0)
      return(false);
  }
  
  if(numero === 0 || numero === 1)
    return(false);
  else
    return(true);
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  
  if(valor)
    return("Soy verdadero");
  else
    return("Soy falso");
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   

  const vector = [];

  for(var i=0; i<11; i++)
  {
    vector.push(i * 6);
  }

  return(vector);
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
  return(((numero < 1000) && (numero > 99))||((numero < -99) && (numero > -1000)));
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

  var contador = 0;
  
  do
  {
    numero += 5;
    contador++;
  }
  while(contador < 8);
  
  return(numero);
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
