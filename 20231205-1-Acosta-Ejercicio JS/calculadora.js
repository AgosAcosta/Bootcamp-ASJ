let calculoInput = document.getElementById("calculo");
let botones = document.getElementsByTagName("button");

for (let i = 0; i < botones.length; i++) {  //!recorre la lista de los botones 
    
    botones[i].addEventListener("click", function (){ //!recorre el array y en cada click se agrega el valor       
        let valor = this.innerText; //!obtenemos el valor del boton                  
        if (valor !== "=" && valor !== "AC") {
            calculoInput.value = calculoInput.value + valor;
        }else if(valor == "="){
            calculoMate(valor)
        }else{ 
            calculoInput.value = ""
        }
    })
}

function calculoMate(valor) {
    switch (valor) {
        case "+":
                calculoInput.value = calculoInput.value + "+"; //! de acuerdo al signo es la operacion que hace en =
                break;
        case "-":
                calculoInput.value = calculoInput.value + "-";
                break;
        case "*":
                calculoInput.value = calculoInput.value + "*";
                break;
        case "/":
                calculoInput.value = calculoInput.value + "/";
                break;
         case "=":                
            calculoInput.value = eval(calculoInput.value); //calculos con string 
            break;
    }
}

let check = document.getElementById("modoOscuro");
function modoOscuro(){
    if(check.checked){
        document.body.style.backgroundColor ="black";
        document.body.style.color= "white";
    }else{
        document.body.style.backgroundColor ="white";
        document.body.style.color= "black";
    }   
}
check.addEventListener("change", modoOscuro);
modoOscuro();