$(document).ready(function () {
    $(".btnoi").hide();
    $(".overlay").css("opacity", "0");

    // HOVER INFORMAÇÕES
    $(".card-curso").hover(
        function () {
            $(this).find(".btnoi").stop(true, true).fadeIn(200);
            $(this).find(".overlay").stop(true, true).animate({ opacity: 0.6 }, 200);
        },
        function () {
            $(this).find(".btnoi").stop(true, true).fadeOut(200);
            $(this).find(".overlay").stop(true, true).animate({ opacity: 0 }, 200);
        }
    );

    // ORGANIZAÇÃO POR ORDEM ALFABÉTICA
    let cards = $(".card-curso").get();
    cards.sort(function (a, b) {
        let nomeA = $(a).find("img").attr("src").toUpperCase();
        let nomeB = $(b).find("img").attr("src").toUpperCase();
        return nomeA.localeCompare(nomeB);
    });
    $.each(cards, function (index, card) {
        $(".pagina").append(card);
    });



    // FILTRO
    function aplicarFiltros() {
        let texto = $("#titulo").val().toLowerCase().trim();
        let categoriaSelecionada = $("#categoria").val();

        $(".card-curso").each(function () {

            let nome = $(this).data("nome").toLowerCase();
            let categoria = $(this).data("categoria").toString();

            let filtroNome = nome.includes(texto);
            let filtroCategoria = (categoriaSelecionada == "0" || categoria == categoriaSelecionada);

            if (filtroNome && filtroCategoria) {
                $(this).show();
            } else {
                $(this).hide();
            }

        });
    }

    $("#titulo").on("keyup", aplicarFiltros);
    $("#categoria").on("change", aplicarFiltros);

});
