$(document).ready(function () {
    console.log("En jquery");
    $("#supermama").click(function () {
        console.log("click en icono");
        $("#modalsupermama").modal('show');

    })

    $("#cuentacuentos").click(function () {
        console.log("click en icono");
        $("#modalcuentacuentos").modal('show');

    })

    $("#dev-front").click(function () {
        console.log("click en icono");
        $("#modaldev-front").modal('show');

    })

    $('[tool-tip-toggle="tooltip-demo"]').tooltip({
        placement: 'top'

    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        )
    });

});