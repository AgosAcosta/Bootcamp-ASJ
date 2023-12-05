//!----------------------------------------------BAR MENU--------------------------------------------------------------------
/* En un Bar, el cliente puede elegir el producto, puede elegir cuando pedir la CountQueuingStrategy
buen dia, buenas noches
cuenta chiste 
pedido de comida (4 o 5 productos)
el usuario puede pedir la cuenta en cualquier momento
quiere dejar la propina?

if, while, do while,ternario
*/

/* function calculoPrecio(precio, cantidad){
    let subtotal = cantidad*precio;
    total = total + subtotal;
}
function contarChiste(){
    alert('¿Por qué los pájaros no usan Facebook?');
    alert('Porque ya tienen Twitter');
}

function solicitarCuenta(){
    if (total > 0) { 
        let propina = parseInt(prompt('Desea agregar propina (10% del total)? 1-Si 2-No'));
        if (propina === 1) {
            let propina= total * 0.10;
            total= total + propina;
        }
        alert(`Su total a abonar es: ${total}`);
    }
}

function bienvenida(){
    let nombre = prompt("Hola! Como es su nombre?");
    alert(`Bienvenido ${nombre}`);
}

bienvenida();
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
                        calculoPrecio (cantidad, precio);
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
             contarChiste();
            break;
        case 3:
            solicitarCuenta();
            break;
        case 4:
            alert('Gracias por su visita');
            break;
        default:
            alert("Ingresaste un valor inválido");
            break;
    }

} while (opcion !== 4);  
 */


//!------------------------------------Fibonacci--------------------------------------------------

/* Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
Ej: el usuario ingresa el 8, mostrar: (SUMA DE LOS DOS ANTERIORES)
0 1 1 2 3 5 8 13 21 34 

-encapsulado en una funcion
-retornar la secuencia dentro de un arreglo
-diferenciar el uso de let y const
-validar el dato ingresado

*/
let num = Number(prompt("Ingrese un numero"));
function Fibonacci(){    
    const array = [1,1] // empieza con los dos primeros de la lista 

    for(let i=2; i < num; i++){
        array.push(array[i - 2] + array[i-1]) //sumo las dos posiciones anterior del indice actual        
    }
    alert(array);
}
Fibonacci();

