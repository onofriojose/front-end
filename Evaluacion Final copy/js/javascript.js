document.addEventListener("DOMContentLoaded", function (event) {
  $(document).ready(function () {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        mostrar(datos);
        let formulario = document.querySelector("form");
        formulario.addEventListener("submit", buscarDigimon);
      });
    function mostrar(response) {
      let tarjeta = document.getElementById("tarjeta");
      tarjeta.innerHTML = "";
      if (response.length > 1) {
        for (let temp of response) {
          tarjeta.innerHTML += `
        <div class="card mt-5 mx-auto col-sm-12" style="width: 18rem;">
          <img src="${temp.img}" id="${temp.name}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-center">${temp.name}</h5>
            <p id="level" class="card-text text-center">${temp.level}</p>
          </div>
        </div>
        `;
        }
      } else {
        for (let temp of response) {
          tarjeta.innerHTML += `
      <div class="card mt-5 mx-auto col-sm-12" style="width: 18rem;">
        <img src="${temp.img}" id="${temp.name}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">${temp.name}</h5>
          <p id="level" class="card-text text-center">${temp.level}</p>
          <a href="index.html" class="btn btn-primary">Volver</a>
        </div>
      </div>
      `;
        }
      }
    }
    function buscarDigimon(event) {
      event.preventDefault(); // evitar que se recargue la página
      let busqueda = document.querySelector('input[type="search"]');
      let nombre = busqueda.value.trim();
      fetch(`https://digimon-api.vercel.app/api/digimon/name/${nombre}`)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          mostrar(datos);
          let boton = document.createElement("button"); // crear boton en el index donde se muestra la carta
          boton.innerHTML = "Volver";
          boton.classList.add("d-flex", "justify-content-center"); // agregar clases usando classList.add()
          boton.onclick = function () {
            location.reload();
          };
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
});