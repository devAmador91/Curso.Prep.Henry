// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimoElemento;
  ultimoElemento = array[array.length-1];
  return ultimoElemento;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var i = 0;i < array.length;i++){
    array[i] += 1;
  }             
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var concatenada = "";
  for(var i = 0;i < palabras.length;i++){
    concatenada += palabras[i];
    if(i === palabras.length-1){
      return concatenada;
    }
    concatenada += " "; 
  }
  
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0; i < array.length; i++){
    if(array[i] === elemento){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resultados = 0;
  for(var i = 0; i < numeros.length; i++){
    resultados += numeros[i];
  }
  return resultados;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  var promedio = 0;
  for(var i = 0; i < resultadosTest.length; i++){
    suma += resultadosTest[i];
    promedio = suma / resultadosTest.length;
  }
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var grande = 0;
  for(var i = 0; i < numeros.length; i++){
    if( numeros[i] > grande ){
      grande = numeros[i];
    }
  }
  return grande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length === 0){
    return 0;
  }
  else{
    if(arguments.length  === 1){
      return arguments[0];
    }
  }
  var resultado = 1;
  for(var i = 0; i < arguments.length; i++){
    resultado *= arguments[i]; 
  }
  return resultado;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantidad = 0;
for(var i = 0; i < arreglo.length; i++){
  if(arreglo[i] > 18){
    cantidad++;
  }
}
return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch(numeroDeDia){
    case 1:var finSemana = "Es fin de semana"; return finSemana;
     case 2:
      case 3:
        case 4:
          case 5: 
            case 6:var laboral = "Es dia Laboral"; return laboral; break;
              case 7: var finSemana = "Es fin de semana"; return finSemana;
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num = n.toString();
  
  switch(num.length){
    case 1: if(n + 1 >= 10){return true;}else{return false;};break;
    case 2: if(n + 10 >= 100) {return true;}else{return false;};break;
    case 3: if(n + 100 >= 1000) {return true;}else{return false;};break;
    case 4: if(n + 1000 >= 10000) {return true;}else{return false;};break;
    case 5: if(n + 10000 >= 100000) {return true;}else{return false;};break;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  var igual =  arreglo[0];
  var cont = 0;
  for(var i = 0; i < arreglo.length; i++){
    if(igual === arreglo[i]){
      cont++
    }
  }
  if(cont === arreglo.length){
    return true;
  }
  return false;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  
  var meses = new Array(3);
  var cont = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
    
    meses[cont] = array[i];
    cont++;
    }
  }
  if(cont === meses.length){
    return meses;
  }else{
    var error = "No se encontraron los meses pedidos";
    return error;
  }

}




function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  
  var cont = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] > 100){
      cont++;
    }
  }
  var mayoresCien = new Array(cont);
  var cont2 = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] > 100){
    mayoresCien[cont2] = array[i];
    cont2++;
    }
  }
  
  return mayoresCien;
  
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código
  
  var resultado = new Array(10);
  for(var i = 0; i < resultado.length; i++){
    
    resultado[i] = numero + 2;
    numero = resultado[i];
    if(i === resultado.length-1){
      return resultado;
    }

    if(resultado[i] === i){
      break;
    }
  }
  var interrupcion = "Se interrumpió la ejecución";
  return interrupcion;

}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

var resultado = [];
for(var i = 0; i < 10; i++){
  numero += 2;
  if(i === 5){
    numero-= 2;
    continue;
  }
  resultado.push(numero);
}
return resultado;

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
