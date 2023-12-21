/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre seletores jQuery, Seletores de Atributos
 * 
 * 
 */

$(document).ready(function () {

    /*EXEMPLO DE INSERÇÃO*/

    // var num = 1;
    // $("span").click(function () {
    //     var newElement_1 = $("<p/>").text(".prepend(): Elemento inserido " + num);//Criação de elemento atrelado a uma variavrel
    //     var newElement_2 = $("<p/>").text(".append(): Elemento inserido " + num);//Criação de elemento atrelado a uma variavrel
    //     var newElement_3 = $("<p/>").text(".before(): Elemento inserido " + num);//Criação de elemento atrelado a uma variavrel
    //     var newElement_4 = $("<p/>").text(".after(): Elemento inserido " + num);//Criação de elemento atrelado a uma variavrel
    //     $("#exemplo div").append(newElement_2); //Inclusão do elemento como ultimo filho do elemento div dentro do elemento de id #exemplo
    //     $("#exemplo div").prepend(newElement_1); //Inclusão do elemento como ultimo filho do elemento div dentro do elemento id #exemplo
    //     $("#exemplo div ").before(newElement_3); //Inclusão do elemento depois do elemento div dentro do elemento id #exemplo
    //     $("#exemplo div").after(newElement_4); //Inclusão do elemento antes do elemento div dentro do elemento id #exemplo
    //     num = num + 1;
    // });


    /* EXEMPLO WRAP */

    // $("#exemplo").prepend($("<a href='#'>Exemplo de Wrap</a>"));
    // $("span").click(function () {
    //     $("#exemplo a").wrap("<p></p>"); // Função que permite que um determinado elemento seja encapsulado por um novo elemento
    // });

    /* EXEMPLO CLONE*/
    $("#exemplo").prepend($("<a href='#'>Exemplo de Wrap</a>"));
    $("span").click(function () {
        $("#exemplo").append($("#exemplo a").clone()); //Função que permite a realização de um clone de um elemento e append ao elemento #exemplo
    });
});