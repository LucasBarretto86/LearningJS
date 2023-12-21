/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre manipuladores jQuery
 * 
 * 
 */

$(document).ready(function () {

    $("span").click(function () {
        
        /** MANIPULAÇÃO CSS*/
        // alert($("#exemplo img").css("width")); // Retorna o valor da propriedade do elemento selecionado
        // $("#exemplo div").css({ border: "30px solid #FF0", background: "#EEE" }); // Manipula o CSS do elemento selecionado
        // alert($("#exemplo img").hasClass("image")); //Verifica se o elemento possui uma classe especifica
        // $("#exemplo img").removeClass("image") //Remove a classe CSS especificada no para no elemento selecionado
        // $("#exemplo").addClass("details"); // Atribui ao elemento em questao um classe CSS

        /** ALTURA E LARGURA */

        // alert($("#exemplo img").height()); // Retorna o height do elemento em questão
        // alert($("#exemplo img").innerHeight()); // Retorna o height do elemento + padding
        // alert($("#exemplo img").outerHeight()); // Retorna o height do elemento + padding + border
        // alert($("#exemplo img").outerHeight(true)); // Retorna o height do elemento + padding + border + margin
        // alert($("#exemplo").width()); // Retorna o width do elemento em questão
        // alert($("#exemplo").innerWidth()); // Retorno do width do elemento + o padding
        // alert($("#exemplo").outerWidth()); // Retorna tamanho do width do elemento + o padding + border
        // alert($("#exemplo").outerWidth(true)); //Retorna o tamanho do width do elemento + padding + border + margin

        // /** POSIÇÃO */
        // alert($("#exemplo img").position().top);// Retorna o valor Y referente ao canto superior do elemento
        // alert($("#exemplo img").position().left); //Retorna o valor X referente ao canto esquerdo do elemento
        // alert($("#exemplo img").offset().top); //Retorna o valor Y de impressão refente ao canto superior do elemento
        // alert($("#exemplo img").offset().left); //Retorna o valor do X de impressão referente ao canto esquerdo do elemento

    });
});