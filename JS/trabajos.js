var datos;
var urlServicio = "https://josuen1709.github.io/trabajos.json";

function callServicios() {
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
    let menuContainer = document.getElementById("servicios");
    let contenido = "";
    datos.servicios.forEach(trabajo => {
        contenido += "<figure class='figure'>";
        contenido += "<img src="+trabajo.imagen+" class='figure-img img-fluid rounded img-thumbnail'>";
        contenido += "</figure>";
    });
    menuContainer.innerHTML = "";
    menuContainer.innerHTML = contenido;
}
window.onload=callServicios;