

$(function() {  
    var header = $("#mainNav");
    // obtenemos el height + padding de la sección 1
    var main_content_area = $("#main_content_area").outerHeight();
    // obtenemos el height + padding de la sección 2
    // y le sumamos el de la sección 1
    var footer_area = $(".footer_area").outerHeight() + main_content_area;
    // cada vez que se produzca scroll en la ventana
    $(window).scroll(function(event) {
        // scrollTop la posición del elemento
        height = $(event.target).scrollTop();
        // dependiendo el lugar de la pantalla
        // modificamos la clase del header
        // par cambiar su color de fondo
        if (height > 200 && height < main_content_area) {
            header.addClass("nav-dark-melon").removeClass("nav-white");
        } else {
            header.addClass("nav-white").removeClass("nav-dark-melon");
        }
    });
});