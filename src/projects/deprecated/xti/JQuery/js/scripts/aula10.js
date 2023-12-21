/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre seletores jQuery, Seletores de Atributos
 * 
 * 
 */

var num = 1;
$(document).ready(function () {
    $("span").click(function () {
        var img = $("<img/>", { 
            src: "img/SWK.png", 
            title: "Sun Wu Kong", 
            width: "128px",
            click: function(){alert("Depois")}
        }); // Criação de elemento e a inclusão de atributos via JSON
        $("#exemplo").prepend(img); // Função que permite a inclusão do elemento criado na var img depois do elemento de tag com id #exemplo

    });
});