var datos;
var urlServicio = "https://josuen1709.github.io/productos.json";

function callProductos() {
    $.ajax({
        type: "GET",
        url: urlServicio,
        dataType: "json",
        success: OnSuccess,
        error: OnError
    });
}

function OnSuccess(data) {
    datos = data;
    cargarGaleria();
}

function OnError(jqXHR, textStatus, errorThrown) {
    alert("Mensaje de Error "+errorThrown);
}

function cargarGaleria() {
    let menuContainer = document.getElementById("galeria");
    let contenido = "";
    datos.productos.forEach(producto => {
        contenido += "<figure class='figure'>";
        contenido += "<img src="+producto.imagen+" class='figure-img img-fluid rounded img-thumbnail'>";
        contenido += "<figcaption class='figure-caption text-center'>"+producto.nombre+"</figcaption>";
        contenido += "</figure>";
    });
    menuContainer.innerHTML = "";
    menuContainer.innerHTML = contenido;
}
window.onload=callProductos;


$(document).ready(function() {
    $('.boxgrid.caption').hover(function() {
        $(".cover", this).stop().animate({
            top: '170px'
        }, {
            queue: false,
            duration: 160
        });
    }, function() {
        $(".cover", this).stop().animate({
            top: '220px'
            }, {
        queue: false,
        duration: 160
        });
    });
});