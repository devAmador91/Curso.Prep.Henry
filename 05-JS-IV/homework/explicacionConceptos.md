
objetos:

Los objetos en programación son todas las 'cosas' del mundo real con el que se puede interactuar. Como ejemplo un objeto puede ser
un coche, una silla, una computadora, un perro, un celular et. Cualquier cosa del mundo real puede ser representado en programación.
En javascript contamos con una estructura para definir a los objetos, de esta maneroa podemos encapsular lo mas importante que necesitamos de 
dicho objeto para utilizar sus caracteristicas y funciones. ejmplo, un perro, el perro es negro, grande, y re raza. el perro juega, camina, come, duerme etc. Especificamos las caracteristicas del perro que necesitamos en un objeto para posteriomente utilizarlo en un programa. 

const perro ={
    color: 'negro',
    tamaño:'grande',
    raza:'french',
}

Propiedades:

Las propiedades van asociadas al objeto, es decir, definen al objetol, asi como color, raza, tamaño definene el objeto perro visto anteriormente.
Esas caractristicas especificas son las propiedades de un objeto y pueden ser iguales a lo que se entiende como variables, con la diferencia en que
estas variables 'propiedades' estan dentro del objeto y defininen a este.

    color: 'negro',
    tamaño:'grande',
    raza:'french',


Métodos:

Un metodo es un comportamiento , una accion a realizar por una cosa 'objeto', asi como el perro tiene propiedades que lo caracterizan, tambien tiene comportamientos, ya que come, duerme, camina, juega, etc. Todas estas accines pueden ser definidas en metodos.

const perro ={
    color: 'negro',
    tamaño:'grande',
    raza:'french',
    comer: function(){
        console.log('El perro come');
    }
    duerme: function(){
        console.log('El perro duerme');
    }
    camina: function(){
        console.log('El perro camina');
    }
    }
}


Bucle for…in:

El bucle for..in realiza la misma funcion que los bucles ya vistos, iteran lo que se encuentre dentro de ellos tantas veces como lo especifiquemos.
En este caso el for...in tiene como objetivo el poder iterar las propiedades que se encuentren dentro de un objeto.

for (let clave in perro){
    console.log(clave);
    console.log(perro[clave]);
}


Notación de puntos vs notación de corchetes

EL objetivo de las dos notaciones mencionadas es el tener acceso a las propiedades de lov objetos, la diferencia principal radica en que la notacion de puntos es mas facil de utilizar, la notacion de corchetes se requiere escribir entre corcchetes valga la redundancia la propiedad a acce
der, con la diferencia en que en la notacion de corchetes se pueden utilizar variables para acceder.