//-------------------------------------------SWITCH-----------------------------------------------

//PAR O IMPAR
/*
let num = parseInt(prompt("Ingrese un numero:"));

switch(num % 2){
    case 0:
        alert("Es un numero par");
        break;
    case 1:
        alert("Es un numero impar");
        break;
    default:
        alert("Ingrese un numero valido");
         break;
}
*/

/*Ejercicio 1
Usando la estructura switch(), creá un programa en el que, si un usuario ingresa "casa", "perro", "pelota", "árbol" o "genio", 
nos devuelva la misma palabra traducida al idioma inglés.
En caso de que la palabra sea distinta a la esperada, mostrale un mensaje que le informe que la palabra ingresada es incorrecta.
 */

/* let palabra = prompt('ingrese una palabra para su traduccion: ("casa", "perro", "pelota", "arbol" o "genio") ');

switch(palabra){
    case 'casa':
        alert('La traduccion es: Home');
        break;
    case 'perro':
        alert('La traduccion es: Dog');
        break;
    case 'pelota':
        alert('La traduccion es: Ball');
        break;  
    case 'arbol':
        alert('La traduccion es: Tree');
        break;
    case 'genio':
        alert('La traduccion es: Genius');
        break; 
    default:
        alert("Ingrese una palabra correcta");
        break;            
}
 */
/* Ejecicio 2:
Usando la estructura switch(), pedile al usuario que valore la película que acaba de ver en:
1 - Muy Mala.
Mala.
Mediocre.
Buena.
5 -Muy buena.
Acompañá cada valoración con un mensaje que indique si lamentás o te alegrás por su valoración.
Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".
Cuando el usuario haya valorado la película, agradecele su visita. 
*/

/* let valor = parseInt(prompt("Ingrese una calificacion para la pelicula del 1 (como muy mala) a 5 (muy buena)"));
switch(valor){
    case 1:
        alert('Calificaste la película como Muy Mala. Lo lamentamos mucho.');
        alert('Gracias por tu visita');
        break;
    case 2:
        alert('Calificaste la película como Mala. Lo lamentamos mucho.');
        alert('Gracias por tu visita');
        break;
    case 3:
        alert('Calificaste la película como Mediocre. Lo lamentamos mucho.');
        alert('Gracias por tu visita');
        break;
    case 4:
        alert('Calificaste la película como Buena.');
        alert('Gracias por tu visita');
        break;
    case 4:
        alert('Calificaste la película como Muy Buena.');
        alert('Gracias por tu visita');
        break;
    default:
        alert("Ingresaste un valor inválido");
        break;         
}
 */

//----------------------------------WHILE------------------------------------------------
/* Que ingrese un numero, y en base a dicho numero, sumatoria de todos los numeros HASTA ese numero.
Mostrar promedio */

/* let num = parseInt(prompt("Ingrese un numero:"));
let contador = 0;
let suma = 0;

while (contador <= num) {    
    suma = suma + contador;
    contador++;
}

let promedio = suma / num;
alert ('el numero ingreso es: '+ num);
alert ('el promedio es: ' + promedio);

*/
//------------------------------------------------------------------------------------------------------------------
/*                                          Contador De Positivos
En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero. 
El programa terminará cuando se ingrese un número negativo.
Al terminar, mostrarle un mensaje con la cantidad de números positivos que ingresó. */

/* let contador = 0;
let num = parseInt(prompt("Ingrese un numero:"));
while(num>=0){
    contador++;
    num = parseInt(prompt("Ingrese un numero:"));
}
alert(`Ingreso ${contador} numeros positivos` ); */

//------------------------------------------------------------------------------------------------------------------

/*                                          FizzBuzz: (se puede usar cualquier ciclo)
En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, 
teniendo en cuenta estos criterios:
Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
Si es múltiplo de 5, deberá imprimir "Buzz".
Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz". 
*/

/*  let num = 1;
while (num<=100){
    if(num % 3 == 0){
    console.log('Fizz');
    }else if (num % 5 == 0){
    console.log('Buzz');
    }else if(num % 3 == 0 && num % 5 == 0 ){
        console.log('FizzBuzz');
    }else{
        console.log(num);
    }
num++;
} */

//------------------------------------------------------------------------------------------------------------------
/* En un Bar, el cliente puede elegir el producto, puede elegir cuando pedir la CountQueuingStrategy
buen dia, buenas noches
cuenta chiste 
pedido de comida (4 o 5 productos)
el usuario puede pedir la cuenta en cualquier momento
quiere dejar la propina?

if, while, do while,ternario
*/

let nombre = prompt("Hola! Como es su nombre?");
alert(`Bienvenido ${nombre}`);
let opcion;
let total = 0;

do {
    opcion = parseInt(prompt('Ingrese alguna de las siguientes opciones:\n1 - Ordenar\n2 - Contar chiste\n3 - Solicitar cuenta\n4 - Salir '));

    switch (opcion) {
        case 1:
            let menu;
            do {
                menu = parseInt(prompt('MENU: \n1 - Medialuna $100 c/u \n2 - Cafe $100 c/u\n3 - Gaseosa $100 c/u\n4 -Pizza $100 c/u\n5 - Salir'));
                switch(menu){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        let cantidad = parseInt(prompt('Ingrese la cantidad deseada'));
                        let precio = 100;                       
                        let subtotal = cantidad*precio;
                        total = total + subtotal;
                        break;
                    case 5:
                        break;
                    default:
                        alert("Ingresaste un valor inválido");
                        break;
                }
            } while (menu !== 5);
            break;
        case 2:
            alert('¿Por qué los pájaros no usan Facebook?');
            alert('Porque ya tienen Twitter');
            break;
        case 3:
            if (total > 0) { 
                let propina = parseInt(prompt('Desea agregar propina (10% del total)? 1-Si 2-No'));
                if (propina === 1) {
                    let propina= total * 0.10;
                    total = total + propina;
                }
                alert(`Su total a abonar es: ${total}`);
            }
            break;
        case 4:
            alert('Gracias por su visita');
            break;
        default:
            alert("Ingresaste un valor inválido");
            break;
    }

} while (opcion !== 4); 