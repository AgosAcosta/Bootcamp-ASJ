let ciudad = document.getElementById("ciudad2");
let enviar = document.getElementById("enviar");
let nombre = document.getElementById("ciudad");
let temperatura = document.getElementById("temperatura");
let wicon = document.getElementById("wicon"),
  src;
let descripcion = document.getElementById("descripcion");

enviar.addEventListener("click", () => {
  cargarCiudad();
});

cargarCiudad = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value}&appid=1a9b3670ada3ece0551373f7325e028d`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      nombre.innerText = json.name;
      temperatura.innerText = json.main.temp;
      document.getElementById("wicon"),
        (src =
          "https://openweathermap.org/img/wn/" +
          json.weather[0].icon +
          "@2x.png");
    })
    .catch((error) => console.log("Ocurrió un error: " + error));
};

//https://openweathermap.org/img/wn/10d@2x.png
