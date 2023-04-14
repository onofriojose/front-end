$(document).ready(function () {
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            data.forEach(digimon => {
                let option = $('<option></option>').text(digimon.name).val(digimon.img);//option toma los valor del nombre del digimon y lo muestra en el contenido de select, toma el url para agregarlo en src de la etiqueta img con .val
                $("#seleccion").append(option);
            });
            $("#seleccion").change(function () {
                let imgSrc = $(this).val();
                $("#imagen").attr("src", imgSrc);
                
            });
        });
});