/*var mensaje = 'Hola Mundooooo js'
alert(mensaje);
console.log(mensaje);
*/

/*-------------------Cantidad De Caracteres:-----------------------------
Pedile al usuario que ingrese un texto breve. Guardá su input.
Mostrá por consola cuántos caracteres tiene el input.*/

/*var numLetra = prompt('Hola: Ingrese una palabra o texto:');
console.log(numLetra.length);
*/

/*--------------------Calculadora De Edad----------------------------------
Preguntale al usuario su edad.
Calculá cuántos días representa. Por ejemplo: Si tiene 28 años, serán 10.220 días.
Mostrá la respuesta al usuario. */

/*var edad = parseInt(prompt('Ingrese su edad'));
var calculo = edad * 365;
alert(calculo);
*/

/*----------------------------------Suma De Valores--------------------------------
Creá 3 Variables:
num1.
num2.
resultado.
Pedile al usuario que le asigne un valor a num1 y num2. La Variable resultado deberá ser la suma entre num1 y num2.
Mostrá por consola el valor de resultado.
 */

/*var num1 = parseInt(prompt('Ingrese el valor uno'));
var num2 = parseInt(prompt('Ingrese el valor dos'));
var calculo = num1 + num2;
console.log(calculo);
 */

/*---------------------------Calculador de abastecimiento de por vida---------------------------
Ejercicio 1
¿Cuántos snacks vas a comer por el resto de tu vida? ¡Averigualo!

Almacená tu edad en una Variable.
Guardá tu edad máxima en otra Variable.
Declará una Variable con el nombre de tu snack favorito.
Estimá cuántos snacks comerás por día y guardalo como un número en una Variable.

Calculá cuántos snacks te quedan por comer en el resto de tu vida.

Mostrá el resultado en un alert: "Necesitarás NN snacks para que te alcancen hasta los XX años."
Agregale un precio por unidad y descubrí cuánto vas a gastar en snacks el resto de tu vida.

Ejercicio 2
Estás organizando tus vacaciones y tenés que calcular cuánto dinero vas a necesitar para comida.
Almacená en una Variable la cantidad de días que vas a estar de viaje.

Estimá tu presupuesto máximo por todo el viaje y guardalo en una Variable.

Declará la Variable comida.
Estimá cuántas comidas vas a tener en todo tu viaje. Guardá este valor en una Variable.

Teniendo en cuenta tu presupuesto máximo, calculá cuánto podés gastar en cada comida.
Mostrá el resultado en un alert: "Podés gastar XX en cada comida para que te alcance la plata durante los XX días de viaje".*/


//Ejecicio 1:
/*var edad = parseInt(prompt('Ingrese su edad'));
var edadMax = parseInt(prompt('Ingrese su edad maxima'));
var snacks = ('Ingrese el nombre de su snacks favorito');
var cantSnacks = parseInt(prompt('Ingrese cuantos snacks te comeras por dia'));
var precio = parseInt(prompt('Precio del snacks'));

var CalculoEdadRestante = edadMax - edad;
var SnacksComer = cantSnacks*edad*365;
var Gasto = precio* SnacksComer;

alert('Necesitarás '+ SnacksComer + ' snacks para que te alcancen hasta los ' + CalculoEdadRestante +'  años.');
alert('Gastaras: '+ Gasto);*/

//Ejercicio 2:
/*var dias = parseInt(prompt('Ingrese cuantos dias te vas de vacaciones:'));
var presuMax = parseInt(prompt('Ingrese tu presupuesto maximo:'));

var comida;
var comidaTotal = parseInt(prompt('Cuantas comidas vas a tener en todo el viaje?:'));

var gastoComida = presuMax / comidaTotal;

alert('Podés gastar' + gastoComida + 'en cada comida para que te alcance la plata durante los '+ dias +  'días de viaje')
*/

/*--------------------------------------Ejercicios: ES6-----------------------------------------
Ejercicio 1
Usá Template Literals para obtener el output "Gabriela es programadora" a partir de las Variables:

let nombre = "Gabriela"
let profesion = "programadora"

Ejercicio 2
Desarrollá un programa que calcule cuánto debe abonar un cliente al finalizar su compra.

Para eso, el programa debe solicitar el ingreso del precio del artículo y la cantidad que llevará.

Usá Template Literals e interpolación de Strings para realizar la operación matemática.*/

//Ejercicio 1:
/*var nombre = "Gabriela";
var profesion = "programadora";

var texto = nombre + ' es ' + profesion;
console.log(texto);
*/

//Ejercicio 2:
/*
var precioProd = parseInt(prompt('Ingrese el precio del articulo'));
var cantidad = parseInt(prompt('Ingrese la cantidad'));
var montoPagar = precioProd * cantidad;
alert('Para comprar '+cantidad + 'del producto debe abonar: $' +montoPagar );
*/
