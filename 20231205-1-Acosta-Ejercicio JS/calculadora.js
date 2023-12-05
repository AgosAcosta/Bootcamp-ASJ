let calculoInput = document.getElementById("calculo");
let botones = document.getElementsByTagName("button");

for (let i = 0; i < botones.length; i++) {  //!recorre la lista de los botones 
    
    botones[i].addEventListener("click", function () { //!recorre el array y en cada click se agrega el valor
       
        let valor = this.innerText; //!obtenemos el valor del boton
        let nombre = this.id; //!obtenemos el id del boton para el calculo      
          
        if (valor !== "=" && valor !== "AC") {
            calculoInput.value = calculoInput.value + valor;

        }else if(valor == "="){
            calculoMate(nombre)
        }else{
            calculoInput.value = ""
        }
    })
}

function calculoMate(nombre) {
    switch (nombre) {
        case "btn_mas":
                calculoInput.value = calculoInput.value + "+"; //! de acuerdo al signo es la operacion que hace en =
                break;
        case "btn_menos":
                calculoInput.value = calculoInput.value - "-";
                break;
        case "btn_multiplicacion":
                calculoInput.value = calculoInput.value * "*";
                break;
        case "btn_division":
                calculoInput.value = calculoInput.value / "/";
                break;
         case "btn_igual":                
            calculoInput.value = eval(calculoInput.value); //calculos con string 
            break;
    }
}
