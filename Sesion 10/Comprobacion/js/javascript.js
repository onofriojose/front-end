/* .addEventListener('dblclick', function () { 
    if (this.style.fontSize === '16px') { 
        this.style.fontSize = '24px'; 
    } else { 
        this.style.fontSize = '16px'; 
    } 
}); */

// para ejecutar jquery luego que el documento cargo
$(document).ready(function(){
    //cuando este listo el documento ase ejecutan otras fucniones o eventos
    $("#text1").hover(function(){
        $("#text2").toggle()
    })
    $("#img").dblclick(function(){
        $("#img").css({width:"100%"})
    })
    $("#img").mouseout(function(){
        $("#img").css({width:"20%"})
    })
    $("#caja3").mouseover(function(){
        $("#caja3").css("font-size","32px")
    })
    $("#caja3").mouseout(function(){
        $("#caja3").css("font-size","16px")
    })
});