// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var matriz = [];

  for (var clave in objeto)
  {
    var array = [];

    array.push(clave);
    array.push(objeto[clave]);

    matriz.push(array);
  }

  return(matriz);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var aux;
  
  var caracteres = {};

  for (var i = 0; i < string.length; i++)
  {
    if(caracteres[string.charAt(i)] !== undefined)
      caracteres[string.charAt(i)] += 1;
    else
      caracteres[string.charAt(i)] = 1;
  };

  return(caracteres);
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayusculas = "";
  var minusculas = "";

  for(var i = 0; i < s.length; i++)
  {
    if( s.charAt(i) === s.charAt(i).toUpperCase() )
      mayusculas += s.charAt(i);
    else
      minusculas += s.charAt(i);
  }

  return(mayusculas + minusculas);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  //var invertido = [];
  var invertido = "";
  var aux;

  // "I love you so much!"

  for(var i = 0; i < str.length; i++)
  {
    if( str.charAt(i) === " ")
    {
      for(var j = i - 1; str.charAt(j) !== " " && j > -1; j--)
      {
        invertido += str.charAt(j);
      }

      invertido += " ";
    }
    else if(i === str.length - 1)
    {
      for(var j = i; str.charAt(j) !== " " && j > -1; j--)
      {
        invertido += str.charAt(j);
      }
    }
  }

  return(invertido);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var aux = "" + numero;
  
  for(var i = 0; i < aux.length; i++)
  {
    if( aux.charAt(i) !== aux.charAt(aux.length - 1 - i) )
      return("No es capicua");
  }
  
  return("Es capicua");
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var modificacion = "";

  for(var i = 0; i < cadena.length; i++)
  {
    if(cadena.charAt(i) !== "a" && cadena.charAt(i) !== "b" && cadena.charAt(i) !== "c")
      modificacion += cadena.charAt(i);
  }

  return(modificacion);
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  /*
  var ordenado = [];
  
  ordenado.push(arr[0]);  //Asumo que nunca estará vacío/undefined arr.

  for(var i = 1; i < arr.length; i++)
  {
    var carga = false;
                                                /////
    for(var j = 0; j < ordenado.length; j++)    ///// ARREGLAR CODIGO
    {                                           ///// NO FUNCA!!!!!!!
      if(arr[i].length < ordenado[j].length)    /////
      {
        ordenado.unshift(arr[i]);
        carga = true;
      }
    }

    if(!carga)
      ordenado.push(arr[i]);
  }

  return(ordenado);
  */
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  resultado = [];

  for (var i = 0; i < arreglo1.length; i++)
  {
    for (var j = 0; j < arreglo2.length; j++)
    {
      if (arreglo1[i] === arreglo2[j])
        resultado.push(arreglo1[i]);          //Este código se puede mejorar aún...
    }                                         //si los array tuvieran nros repetidos que coinciden
  }                                           //el array final se cargaría con valores repetidos...

  return(resultado);
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

