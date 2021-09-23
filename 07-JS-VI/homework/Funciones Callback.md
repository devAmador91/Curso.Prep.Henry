Funciones Callback

Cuando una funcion recibe por parametro a otra funcion y la ejecuta, se dice que se esta utilizando una funcio callback, y para que sirve?, a esta manera de 
escribir codigo se le llama programción funcional y su objetivo es hacer mas especificos a las fucniones, facilitando la lectura, mejorando el
nivel de abstracción, y a no repetir codigo.

Cuando se pasa por parametro una funcion, esta solo esta pasando la referencia de la funcion y no se ejecuta dentro del parametro, si no que es 
utilizada dentro de la funcion contenedora.

Un ejemplo de esto seria el siguiente:

function perro(str){
    return 'El perro hace: ' +str+;
}

function gato(str){
    return 'El gato hace: ' +str+;
}

function sonidoAnimal(str,callback){ //aqui se esta recibiendo la referencia a una funcion, la cual se invoca dentro de la funcion sonido animal
    callback(str);
}

sonidoAnimal('miau',gato);
sonidoAnimal('wouf',perro);