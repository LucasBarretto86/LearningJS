/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre seletores jQuery, Seletores de Atributos
 * 
 * 
 */

$(document).ready(function () {
    $("span").click(function() { 
        // alert($("#exemplo p").html()); //Faz get do conteudo html presente no elemento especificado
        // $("#exemplo p").html("Novo <b>conteúdo</b> html de exemplo"); //Set  novo conteúdo html ao elemento especificado
        // $("#exemplo <p></p>").html("Inclusão de novo elemento via seletor e novo conteúdo através da função .html()");
        // alert($("#exemplo p").text()); // Recupera somente o conteúdo de texto excluido qualquer markup
        // $("#exemplo div").text("Novo conteúdo de texto para o elemento p de exemplo"); //Set novo texto para o elemento.
        // alert($("#exemplo textarea").val()); //Recupera o valor presente em qualquer elemento de input
        // $("#exemplo textarea").val("Novo valor para o elemento de input com uso da função .val()"); // Permite a modificação do value de qualquer elemento de input
        // $("#exemplo a").replaceWith("<a href=#>Teste 1</a>");//Função que permite a substituição de conteudo em texto ou html
    
    });
});