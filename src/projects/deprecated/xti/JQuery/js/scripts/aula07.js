/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre seletores jQuery, Seletores de Atributos
 * 
 * 
 */

$(document).ready(function () {
    // $(":input").css("border", "3px solid #f00");
    // $(":text").css("border", "3px solid #f00");
    // $(":password").css("border", "3px solid #f00");
    // $(":radio").parent().css("border", "3px solid #f00"); // Usando a função auxiliar da jQuery para buscar o parent do radio que é filho de um label
    // $(":checkbox").parent().css("border", "3px solid #f00");// Usando a função auxiliar da jQuery para buscar o parent do checkbox que é filho de um label
    // $(":file").css("border", "3px solid #f00");
    // $(":submit").css("border", "3px solid #f00");
    // $(":button").css("border", "3px solid #f00");
    // $(":reset").css("border", "3px solid #f00");
    // $(":disabled").css("border", "3px solid #f00");
    // $(":enabled").css("border", "3px solid #f00");
    $(":focus").css("border", "3px solid #f00");

    /* Elementos direto na tag*/
    // $("textarea").css("border", "3px solid #f00");
    // $("select").css("border", "3px solid #f00");
    // $("option").css("border", "3px solid #f00");

    /*Elementos auxiliares via jQuery*/
    // $(":checkbox").parent().css("border", "3px solid #f00");


});