// Al pasar el mouse por el primer <div>
// “text1” se mostrará el segundo "text2" y 
//al salir de él se ocultará nuevamente.
function mostrar() {
    //nombrar o modificar un elemento por id
    document.getElementById("text2").style.display = "block";
}

function ocultar() {
    document.getElementById("text2").style.display = "none"
}

// Al hacer clic en el <div> id “caja2” 
//la imagen deberá agrandarse un 100% y al salir de ella, 
//volver a su tamaño inicial.
function agrandar() {
    document.getElementById("img").style.width = "100%"
}

function achicar(){
    document.getElementById("img").style.width = "20%"
}

//Con el tercer <div> la letra se agrandará al hacer doble
// clic en él.
// function cambiarLetra(){
//     document.getElementById("caja3").style.fontSize = "32px"
// }

// otra forma
document.getElementById('caja3').a


.addEventListener('dblclick', function () { 
    if (this.style.fontSize === '16px') { 
        this.style.fontSize = '24px'; 
    } else { 
        this.style.fontSize = '16px'; 
    } 
});