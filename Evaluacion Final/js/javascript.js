$(document).ready(function () {
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            data.forEach(digimon => {
                let option = $('<option></option>').text(digimon.name).val(digimon.img);//Despues de entender que option podia tener mas valores, le agrego el nombre del digimon al texto, el url al valor para poder cambiar la fuente de la etiqueta "img" por cada digimon seleccionado y el level lo capturo con el atributo data- usando attr
                $("#seleccion").append(option);
            });
            $("#seleccion").change(function () {
                let imgSrc = $(this).val();
                $("#imagen").attr("src", imgSrc);
                
            });
        });
});