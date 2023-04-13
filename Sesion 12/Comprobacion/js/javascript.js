//usando fetch api

//obtener elemento por id boton
var boton = document.getElementById("boton")
//agregar accion o evento click
boton.addEventListener('click',()=>{ //()=> es abreviatura a function(), es una arrow function
    //Fetch api o peticion para obtener las frases
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(response => response.json())//se obtiene el json de la respuesta
    .then(data =>{// a esos datos se le llama con una variable data
        console.log(data)//impresion en consola para verificacion
        var texto = document.getElementById("texto")
        texto.innerHTML = data.joke
    })
});