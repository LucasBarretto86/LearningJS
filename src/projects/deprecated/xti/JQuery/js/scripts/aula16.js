/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre eventos jQuery
 * 
 * 
 */

$(document).ready(function () {

    /**EXEMPLO DE EVENTO DE TECLADO */
    // $(":text").keyup(function () { 
    //     $("#exemplo p").text($(this).val()); // this, recupera o elemento pai. 
    // });

    /**EXEMPLO DE BIND E UNBIND, EVENTO GENERICO */
    // function eventoTest1() {
    //     $("#exemplo p").text($(this).val());
    // }
    // $(":text").bind("keyup", eventoTest1); //Associação de evento (um ou mais) generico a elementos criados diretamento no html
    // 
    // $(":button").bind("click", function () {
    //     $(":text").unbind("keyup", eventoTest1); // Desassociação de evento generico
    //     alert("Text input evento desassociado, unbinded!");
    // });

    /**EXEMPLO DE DELEGATE E UNDELEGATE */
    // $(":button").click(function () { //Criação de novo elemento via jQuery
    //     $("form").prepend("<label>Outro: </label><input type=text id=outro />");
    // });
    // $(":text").bind("keyup", function () {
    //     $("#exemplo p").text($(this).val());
    // });
    // $("form").delegate(":text", "keyup", function () {
    //     $("#exemplo p").text($(this).val());
    // });

    /**EXEMPLOS DE TRIGGER*/
    // function eventoTest2 () {
    //     alert("Disparado!");
    // }
    // $(":button").bind("click", function () {
    //     $(":text").trigger("focus"); // disparando o evento focus
    //     $(":text").trigger(eventoTest2()); // disparando uma função
    // });

    /**EXEMPLOS DE TRIGGER COM PARAM*/
    $(":button").bind("click", function(e, src, width){ // Chamar função literal segura evento, como param generico
       $("#exemplo p").append($("<img/>").attr("src", src).css("width", width))
    });
    
    $(":button").trigger("click", ["img/SonSon.png", "128px"]); // Dispara evento automatico, setando os valores do evento

});