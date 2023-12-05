let btn = document.getElementById("btn")
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");


btn.addEventListener("click", function(){
    let input_nombre = document.getElementById("nombre");
    let input_apellido = document.getElementById("apellido");

    h1.innerHTML = input_nombre.value;
    h2.innerHTML =  input_apellido.value;

}) 