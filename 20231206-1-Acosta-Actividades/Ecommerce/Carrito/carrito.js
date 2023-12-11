let carrito = document.getElementById("carrito");
let carritoProductos = JSON.parse(localStorage.getItem("carritoProductos")) ;
let contenidoCarrito = document.getElementById("comprasRealizadas");
let totales = document.getElementById("totales");


function cargarCarrito(){

    contenidoCarrito.innerHTML= "";  //? ---- empezamos limpiando
    let total = 0; //? ---- total en $0

    for (let i = 0; i < carritoProductos.length; i++) {  //? ---- recorremos el array
        let producto = carritoProductos[i];      //? ---- por cada elemento del array se crea un produ
        contenidoCarrito.innerHTML +=   //? ---- agregamos al div la info
        //<img src="${producto.imagen}" alt="${producto.nombre}">
        `
            <div class="row">
                <div class="col">${producto.nombre}</div>
                <div class="col">Cantidad: ${producto.cantidad}</div>
                <div class="col">Precio: ${producto.precio}</div>
                <div class="col">
                <button class="btn btn-danger" onclick="eliminarProducto(${i})">Eliminar</button>
                </div>
            </div>
        `;
    
        total += producto.cantidad * parseFloat(producto.precio.replace("$", "")); //? ---- calculamos el total y reemplazamos el $ porque da error al calcular
    }
    carrito.innerHTML = contenidoCarrito.innerHTML; //? ---- agregamos al div la info del carrito
    totales.innerText = `$${total.toFixed(3)}`;
}




function eliminarProducto(i){
    carritoProductos.splice(i,1); //? ---- eliminamos del array el elemento del i
    localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos)); //? -- actualizamos el json
    cargarCarrito();
}

/* function borrarTodo(){

    localStorage.removeItem("carritoProductos");
    cargarCarrito();

}
 */
cargarCarrito();

function pagar(){
    let carritoProductos = JSON.parse(localStorage.getItem("carritoProductos")); //? -- traemos el array para eliminar los elementos

    if(carritoProductos.length > 0){
        alert(" Carrito listo para retirar");
        localStorage.removeItem("carritoProductos");

        location.href= "/Bootcamp-ASJ/20231206-1-Acosta-Actividades/Ecommerce/Carrito/carrito.html" //? -- para que recargue solo
    }else{
        alert("El carrito esta vacio")
    }
}



// localStorage.removeItem("dato") //? eliminamos este dato
// localStorage.clear() //? elimina todo