function Palabra(){

    let palabraUsuario = document.getElementById("textoIngresado").value;
    let palabraCambiada = palabraUsuario.replace(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/ig,"_")
    document.getElementById("palabra").innerText = palabraCambiada;  

} 

