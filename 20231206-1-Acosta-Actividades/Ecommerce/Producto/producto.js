//!------ PARA AGREGAR O RESTAR ELEMENTOS -----
let botonSumar = document.getElementById("sumar");
let botonRestar = document.getElementById("restar");
let cantidad = document.getElementById("cantidad");

//!------ PARA AGREGAR AL CARRITO -----
let btnAgregar= document.getElementById("btn_Agregar");


//!BOTON SUMA
botonSumar.addEventListener("click", function(){
    let cantidadActual = parseInt(cantidad.value);
    cantidadActual++;
    cantidad.value = cantidadActual;
});
//!BOTON RESTA
botonRestar.addEventListener("click", function(){
    let cantidadActual = parseInt(cantidad.value);
    if(cantidadActual > 0){ //? -------------------vemos si hay algo para descontar
        cantidadActual--;
        cantidad.value = cantidadActual;
    }
});

//! CARRITO:

btnAgregar.addEventListener("click", () => {
    //let imagenProducto = document.getElementById("imagenProducto").src;
    let nombreProducto = document.getElementById("nombreProducto").innerText;
    let precioProducto = document.getElementById("precioProducto").innerText;
    let cantidad = document.getElementById("cantidad");


//recupero los datos guardados en localStorage y lo convierto a objeto

    let carritoProductos = JSON.parse(localStorage.getItem("carritoProductos"))  || []; //? --buscamos los valores y los parseamos --  || [] si no esta vacio lo trae, o puede genrar uno nuevo
                                                                                        
    if(parseInt(cantidad.value) > 0){
        
        let carritoProducto = {
            // imagen : imagenProducto,
             nombre: nombreProducto,
             cantidad: parseInt(cantidad.value),
             precio: precioProducto
         };
     
         
         carritoProductos.push(carritoProducto); //? --agregamos al final de la lista los productos
         localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos)); //? --seteamos la compra y convierte en objeto el array
         alert("Se agrego con exito al carrito")
    }else{
        alert("Ups! Para comprar debes agregar una cantidad")
    }


});


 
//GUARDAMOS Y BUSCAMOS DATOS

/* let btn_save = document.getElementById("guardar");
let btn_get = document.getElementById("recuperar");

btn_save.addEventListener("click", ()=>{
localStorage.setItem("dato","123456")

})
btn_get.addEventListener("click",()=>{
    let data = localStorage.getItem("dato")
    document.getElementById("datos").innerText=data


   // localStorage.removeItem("dato") //? eliminamos este dato
   // localStorage.clear() //? elimina todo
})
 */

