// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return(array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  return(array[array.length - 1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return(array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (var i=0; i < array.length; i++)
  {
    array[i]++;
  }

  return(array);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);

  return(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  
  return(array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  if(palabras.length > 0)
  {
    var rta = palabras[0];
    
    for(var i=1; i < palabras.length; i++)
    {
      rta = rta + " " + palabras[i]; 
    }

    return(rta);
  }
  //else -> escribiría alguna respuesta a argumento inválido.
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  for(var i=0; i < array.length; i++)
  {
    if(array[i] === elemento)
      return(true); 
  }

  return(false);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var total = 0;

  for(var i=0; i < numeros.length; i++)
  {
    total += numeros[i];
  }

  return(total);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var total = 0

  for(var i=0; i < resultadosTest.length; i++)
  {
    total += resultadosTest[i];
  }

  return(total / resultadosTest.length);
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var max = numeros[0]; //Asumo que el argumento siempre al menos tiene un valor.

  for(var i=1; i < numeros.length; i++)
  {
    if(max < numeros[i])
      max = numeros[i];
  }

  return(max);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if(arguments.length > 1)
  {
    var producto = 1;
    
    for(var i=0; i < arguments.length; i++)
    {
      producto *= arguments[i];
    }

    return(producto);
  }
  else if (arguments.length === 1)
    return(arguments[0]);
  else
    return(0);
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var cantidad = 0;

  for(var i=0; i < arreglo.length; i++)
  {
    if(arreglo[i] > 18)
      cantidad++;
  }

  return(cantidad);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  if(numeroDeDia === 1 || numeroDeDia === 7)
    return("Es fin de semana");
  else if (numeroDeDia < 7 || numeroDeDia > 1)
    return("Es dia Laboral");
  else
    return("Dato invalido");
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var string = "" + n; //Convierto el número a string.
  
  return(string.charAt(0) === "9");

  //Potencial desafío -> cómo lo haría sin esta conversión a string?
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  for(var i=1; i < arreglo.length; i++)
  {
    if(arreglo[0] !== arreglo[i]) //Como deberían ser todos iguales, comparo solo contra el primero.
      return(false);
  }

  return(true);
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  
  const pedido = [];
  
  
  var enero = false;
  var marzo = false;
  var noviembre = false;

  /*
  // El test no aprobaba esto pq asumía casos muy triviales.

  // Éste método contempla potenciales repeticiones, y devolver los meses encontrados en orden.

  for(var i=0; i < array.length; i++)
  {    
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre")
    {
      switch (array[i]) //Hago switch pq ya se que encontré alguno de los 3 meses.
      {
        case "Enero":
          if(!enero)  //Con esto evito cargar un mes más de una vez.
          {
            enero = true;
            
            pedido.push(array[i]);

            if(marzo) //Si ya había encontrado Marzo.
            {
              pedido.push("Marzo"); 

              if(noviembre) //Si ya había encontrado Noviembre.
              {
                pedido.push("Noviembre");
                i = array.length; //Fin de la búsqueda.
              }
            }
          }
          break;
        
        case "Marzo":
          if(!marzo)
          {
            marzo = true;

            pedido.push(array[i]);

            if(noviembre) //Si ya había encontrado Noviembre.
            {
              pedido.push("Noviembre");
              i = array.length; //Fin de la búsqueda.
            }
          }
          break;
        
        default:  //Noviembre.
          noviembre = true;

          pedido.push(array[i]);

          i = array.length; //Fin de la búsqueda.
          break;
      }
    }
  }
  */

  for(var i=0; i < array.length; i++)
  {    
    switch (array[i]) //Hago switch pq ya se que encontré alguno de los 3 meses.
    {
      case "Enero":
        {
          pedido.push(array[i]);
        enero = true;
        break;
        }
        
      case "Marzo":
        {
          pedido.push(array[i]);
        marzo = true;
        break;
        }
      
      case "Noviembre":
        {
          pedido.push(array[i]);
          noviembre = true;
          break;
        }

      default:
        break;  //Creo que este default no es correcto hacerlo así...
    }
  }

  if(enero && marzo && noviembre)
    return(pedido);  
  else
    return("No se encontraron los meses pedidos");
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  const pedido = [];

  for (var i = 0; i < array.length; i++)
  {
    if(array[i] > 100)
      pedido.push(array[i]);
  }

  return(pedido);
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  const pedido = [];

  var suma = numero;

  for(var i = 0; i < 10; i++)
  {
    if(suma === (i + 1))
      break;
    else
    {
      suma += 2;
      pedido.push(suma);
    }   
  }

  if(suma !== (numero + 20))
    return("Se interrumpió la ejecución");
  else
    return(pedido);
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  const pedido = [];

  var suma = numero;

  for(var i = 0; i < 10; i++)
  {
    if(i === 4)
      continue; //No hago el push pq solo lo pide para cada NUEVO valor.
    else
    {
      suma += 2;
      pedido.push(suma);
    }   
  }

  return(pedido);
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
