prototype:

Cuando creamos un objeto en javascript, este hereda propiedades y metodos de objetos que se encuentran jerarquicamente mas arriba que el objeto creado,
y como todo en javascript es un objeto, todos los objetos heredan caracteristicas de un objeto llamado Object.
Ahora bien, en otros lenguajes que son orientados a objetos, se utilizar clases, donde se especifican las propiedades y metodos que necesitamos
que tengan los objetos a crear. Eso en javascript se emulo utilizando la funcion prototype el cual es una plantilla donde podemos crear un objeto,
por medio de funciones, las cuales en su interior implementan las propiedades que necesitamos. prototype se utiliza de la siguiente manera:

creamos una funcion constructora de propiedades:

funcion perro(nombre){
this.nombre = nombre;
}

creamos un metodo para perro:

perro.prototype.ladrar = function(){
    return 'wouf wouf';
}

cramos el objeto perro utilizando  la palabra reservada new:

var perro = new Perro('Rocky');

Usamos la funcion:
console.log(perro.ladra);

Con estas lineas habremos creado un prototipo en el objeto perro, el cual puede se usado como cualquier funcion integrada en el objeto, esto explica el porque podemos utilizar las funciones de un Array, de un string por ejemplo el string.length, length es un prototipo que hereda el objeto
string.

Constructor:

Javascrip sigue evolucionando, y en su actualizazion del 2015 incorporo la sintaxis para implementar clases como siu de un lenguaje orientado a objetos se tratara:

creamos la clase perro:

class Perro{
    constructor(nombre){
        this nombre = nombre;
    }
    function ladrar(){
    return 'wouf wouf';
}

Estas dos formas de contruir objetos son validas y hacen lo mismo.

