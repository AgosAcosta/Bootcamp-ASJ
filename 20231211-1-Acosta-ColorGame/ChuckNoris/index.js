let frase = document.getElementById("frase");
let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then((Response) => Response.json())
    .then((json) => {
      frase.innerText = json.value;
    })
    .catch((error) => console.log("Ocurrió un error: " + error));
});
