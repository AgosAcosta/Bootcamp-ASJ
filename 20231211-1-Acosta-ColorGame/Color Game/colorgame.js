const colores = [];
const cantidadColores = 6;

const cuadrados = document.querySelectorAll(".square");
const nombreColor = document.getElementById("colorDisplay");
const mensaje = document.getElementById("message");
const h1 = document.getElementById("h1");
const reiniciar = document.getElementById("reset");

for (let i = 0; i < cantidadColores; i++) {
  colores.push(generarColor());
}

const colorRandom = pickColor();
nombreColor.innerHTML = `${colorRandom.toUpperCase()}`;
reiniciar.addEventListener("click", reiniciarJuego);

for (let i = 0; i < cuadrados.length; i++) {
  cuadrados[i].style.backgroundColor = colores[i];

  cuadrados[i].addEventListener("click", () => {
    const cuadradoElegido = document.getElementById(`cuadrado${i + 1}`);
    const colorCuadrado = cuadradoElegido.style.backgroundColor;

    if (colorCuadrado === colorRandom) {
      mensaje.innerHTML = "¡Correcto!";
      h1.style.backgroundColor = colorRandom;
      changeColors(colorRandom);
    } else {
      cuadradoElegido.style.backgroundColor = "#232323";
      mensaje.innerHTML = "Inténtalo nuevamente";
    }
  });
}

// Generar número aleatorio
function generarNumero(numero) {
  return Math.floor(Math.random() * numero);
}

// Generar color aleatorio
function generarColor() {
  const rojo = generarNumero(256); // 0-255
  const verde = generarNumero(256); // 0-255
  const azul = generarNumero(256); // 0-255
  return `rgb(${rojo}, ${verde}, ${azul})`;
}

// Elegir un color aleatorio
function pickColor() {
  const colorRandom = generarNumero(cantidadColores);
  return colores[colorRandom];
}

// Cambiar color a todos los cuadrados
function changeColors(color) {
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = color;
  }
}

// Reiniciar juego
function reiniciarJuego() {
  window.location.reload();
}

// -------- COLORES PREDETERMINADO

/* let colores = [
  "rgb(240, 14, 128)",
  "rgb(143, 174, 110)",
  "rgb(61, 42, 163)",
  "rgb(149, 211, 73)",
  "rgb(211, 124, 73)",
  "rgb(211, 73, 84)",
];

let cuadrados = document.querySelectorAll(".square");
let nombreColor = document.getElementById("colorDisplay");
let mensaje = document.getElementById("message");
let h1 = document.getElementById("h1");
let iniciar = document.getElementById("reset");

let colorRandom = pickColor();
nombreColor.innerHTML = colorRandom;

for (let i = 0; i < cuadrados.length; i++) {
  cuadrados[i].style.backgroundColor = colores[i];

  cuadrados[i].addEventListener("click", () => {
    let cuadradoElegido = document.getElementById(`cuadrado${i + 1}`);
    let colorCuadrado = cuadradoElegido.style.backgroundColor;

    if (colorCuadrado === colorRandom) {
      mensaje.innerHTML = "¡Correcto!";
      h1.style.backgroundColor = colorRandom;
      changeColors(colorRandom);
      reiniciar();
    } else {
      cuadradoElegido.style.backgroundColor = "#232323";
      mensaje.innerHTML = "Inténtalo nuevamente";
    }
  });
}

// Cambiar color a todos los cuadrados
function changeColors(color) {
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = color;
  }
}

// Elegir un color aleatorio
function pickColor() {
  let colorRandom = Math.floor(Math.random() * colores.length);
  let pickedColor = colores[colorRandom];
  return pickedColor;
}

function reiniciar(){
  iniciar.addEventListener("click",()=>{
    location.reload();
  })
} */
