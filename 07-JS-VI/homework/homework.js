// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

      //Así lo haría SIN usar callbacks...
      //return(nombre.charAt(0).toUpperCase() + nombre.slice(1));

  function mayusInicial(cadena)
  {
    return(cadena.charAt(0).toUpperCase() + cadena.slice(1));
  }

  return(mayusInicial(nombre)); //Quizás hasta podría hacer todo en una misma línea usando una función anónima...
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  return( cb(n1,n2) );  //Callback (cb) -> una función que es invocada DESDE OTRA FUNCION.
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

      //Método SIN usar callbacks...
      
      // var suma = 0;

      // for (var i = 0; i < numeros.length; i++)
      // {
      //   suma += numeros[i];
      // }

  cb( numeros.reduce( function(suma, elementoactual) { return(suma + elementoactual) } ) );

  // Invoco a la función cb pasandole el RESULTADO de hacer "reduce" EN el array "numeros",
  // que va a usar una función que lleva el ACUMULUADOR "suma" y el valor actual "elementoactual".
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

      //Método SIN usar callbacks...
      
      // for (var i = 0; i < array.length; i++)
      // {
      //   cb(array[i]);
      // }

      // return(array);

  array.forEach( function(elementoactual) { return cb(elementoactual); } );
  //Técnicamente no es correcto usar forEach DENTRO de una función llamada igual...

  // Como forEach recorre todo el array sin devolver ningún valor, puedo entonces usarlo
  // sin necesidad de terminar la consigna con un "return" porque solamente busca ejecutar todo lo que se programe.

  // La función anónima simplemente devuelve el resultado de invocar "cb" pasando como parámetro el elemento actual.
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

      //Método SIN usar callbacks...

      // var nuevoarray = [];

      // for(var i = 0; i < array.length; i++)
      // {
      //   nuevoarray[i] = cb(array[i]);
      // }

  return( array.map( function(elementoactual) { return cb(elementoactual) } ) ); //Recordar que el resultado del map() es un array nuevo :)

  // La función anónima simplemente devuelve el resultado de invocar "cb" pasando como parámetro el elemento actual.

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

      // Método SIN usar callbacks...

      // var nuevoarray = [];
      
      // for (var i = 0; i < array.length; i++)
      // {
      //   if (array[i].charAt(0) === "a")
      //     nuevoarray.push(array[i]);
      // }

  return( array.filter( function(elementoactual) { if(elementoactual.charAt(0) === "a") { return(elementoactual); } } ) ); // #OneLiner :)

  // La función anónima evalúa si el elemento actual (se asume string) empieza con "a"; si es así lo carga usando el return.
  
  // La función map() usado en este caso cargaría SIEMPRE, solo que en caso de no cumplir la condición carga un "undefined".
  // Posible #Challenge para ver cómo se podría ajustar el código para que sí pueda resolverlo usando map()...
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
