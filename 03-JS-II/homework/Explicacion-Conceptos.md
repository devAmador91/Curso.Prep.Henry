for:
El ciclo for nos sirve para hacer algo repetidas veces. El numero de veces lo podemos especificar nosotros como programadores.
Esto es muy util ya que si por ejemplo necesitaramos imprimir por consola una lista de 50nombres y si no tuvieramos al ciclo for
tendriamos que escribir 50 veces console.log() con cada uno de los nombres.
El ciclo for se compone de tres partes: la inicialización de la variable que va a contar el numero de repeticiones, la condición que
vamos a poner para dar un limite a las repeticiones, y finalmente damos la instruccion de que la variable contadora debe aumentar su 
valor cada vez que se repita el ciclo. Con estas tres partes podemos crear el ciclo y colocar dentro de este lo que necesitemos.

Operador logico &&:

Este operador da como resultado un valor true si las dos expresiones a evaluar son verdaderas. Por ejemplo, si yo digo que es de dia y el sol 
salio, quiere decir que la expresion es verdadera. Pondriamos de esta manera al operador: if (dia && sol) , en este caso si es en verdad de dia y 
por logica hay sol las dos expresiones son true. sin embargo si yo digo es de noche y hace sol. uno de ellos es verdadero pero el otro es falso. if(noche && sol), si en verdad es de noche pero por logica no hay sol , esta expresion en false.

Operador logico ||:

Este operador requiere que por lo menos una expresion sea verdadera por lo que a diferencia de && con que una expresion sea true la expresion completa es verdadera. Siguiendo el ejemplo anterior de la noche y el sol pues tendriamos una expresion asi: if(noche || sol); En este caso si
en verdad es de noche toda la expresion es verdadera y no se tomaria en cuenta que haya sol. Por otro lado si no es de noche pero si hay sol entoces de igual manera la expresion se true.

Operador logico !

Este operador simplemente dara como resultado lo contrario al resultado de la expresion donde se coloque. si decimos que if(!("sol" === "sol") la comparacion de strings dara como resultado el valor de true pero el operador lo contradice y asigan el valor false a la expresion. simplemente es decir lo contrario a lo expresado. 


