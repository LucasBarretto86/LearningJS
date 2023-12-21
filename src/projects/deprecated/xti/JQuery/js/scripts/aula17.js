/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre efeitos em jQuery
 * 
 * 
 */

$(document).ready(function () {
    $("#btn-hide").click(function(){
        $("#block").hide(); 
        // Função que oculta elemento
    });

    $("#btn-show").click(function(){
        $("#block").show(); 
        // Função que mostra elemento
    });

    $("#btn-toggle").click(function(){
        $("#block").toggle(); 
        // Função que oculta ou mostra elemento
    });

    $("#btn-fadeout").click(function(){
        $("#block").fadeOut(2000); 
        // Função que faz elemento sumir em função do temo,  no exemplo o param é 2 segundos
    });

    $("#btn-fadein").click(function(){
        $("#block").fadeIn(1000); 
        // Função que faz elemento aparecer em função ao tempo, no exemplo o param de 1 segundo
    });

    $("#btn-fadeto").click(function(){
        $("#block").fadeTo(2000, 0.3); 
        // Função que permite elemento fazer fadeIn controlado, no exemplo param 1 de 2 segundos, 
        // param 2 30% de opacidade, IMPORTANTE após usado esta função limita o fadeIn
    });

    $("#btn-fadetoggle").click(function(){
        $("#block").fadeToggle("fast"); 
        //Função que intercala entre fadeIn e fadeOut
    });

    $("#btn-slideup").click(function(){
        $("#block").slideUp(2000);
        //Permite o fechamento do elemento em direção a parte superior
    });

    $("#btn-slidedown").click(function(){
        $("#block").slideDown(1000);
        //Permite a abertura do elemento em direção ao parte inferior
    });
    
    $("#btn-slidetoggle").click(function(){
        $("#block").slideToggle(1000);
        //Intercala entre o fechar e abrir
    });

});