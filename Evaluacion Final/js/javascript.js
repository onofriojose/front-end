$(document).ready(function () {
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            data.forEach(digimon => {
                let option = $('<option></option>').text(digimon.name).val(digimon.img).data('level', digimon.level);//option tomara los valores de cada digimon en la lista
                $("#seleccion").append(option);//a medida que se recorre la lista se van agregando opciones a la lista desplegable
            });
            $("#seleccion").change(function () {//evento para cuando se cambie de opcion en el select
                let imgSrc = $(this).val();//val tiene el valor de digimon.img
                let nombre = $(this).find(":selected").text();
                let nivel = $(this).find(":selected").data('level');
                $("#imagen").attr("src", imgSrc);
                $("#titulo").text(nombre)
                $("#level").text(nivel); // Muestra el valor del atributo 'data-level'
            });
        });
});