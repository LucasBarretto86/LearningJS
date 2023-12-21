/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre manipuladores jQuery
 * 
 * 
 */

$(document).ready(function () {

    $("span").click(function () {
        $("#exemplo h1").remove(); // Remove elemento selecionado
        $("#exemplo p").empty(); // Limpa o conteudo interno do elemento selecionado
        $("#exemplo p").unwrap(); // Destroi o elemento pai do elemento selecionado e seus irmaos
        
    });
});