
/*   //FETCH
  console.log("utilizando FETCH");

  fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((response) => response.json()) //convertir a JSON
    .then((json) => {
      console.log(json.name);
      info.innerText = json.name;
      imagen.setAttribute("src", json.sprites.front_default);
    })
    .catch((error) => console.log("Ocurrió un error: " + error));
});
 */

let ciudad = document.getElementById("ciudad");
let enviar = document.getElementById("enviar");

enviar.addEventListener("click",()=>{
cargarCiudad();
    
})

cargarCiudad=()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value}&appid=1a9b3670ada3ece0551373f7325e028d`)
    .then((response) => response.json()) //convertir a JSON
    .then((json) => {
      console.log(json);

    })
/*       info.innerText = json.name;
      imagen.setAttribute("src", json.sprites.front_default);
    })
    .catch((error) => console.log("Ocurrió un error: " + error)); */
}

