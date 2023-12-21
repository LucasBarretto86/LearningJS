/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre eventos jQuery
 * 
 * 
 */

$(document).ready(function () {

    /* EVENTOS DE TECLADO */
    // $(":text").keyup(function () { 
    //     $("#exemplo p").text($(this).val()); // this, recupera o elemento pai. 
    // });

    // $(":text").keydown(function(){
    //     $("#exemplo p").text($(this).val()); // this, recupera o elemento pai. 
    // });

    // $(":text").keypress(function () { 
    //     $("#exemplo p").text($(this).val()); // this, recupera o elemento pai. 
    // });

    /*EVENTOS DE FORMULÁRIO e INPUT*/

    // $(":text").focus(function(){
    //     $(this).css("background", "#FF0");
    //     $("#exemplo p").text("Focus");
    // });

    // $(":text").blur(function(){
    //     $(this).css("background", "#FFF");
    //     $("#exemplo p").text("Blur");
    // });

    // $("form").submit(function(){
    //     alert($(":text").val());
    // });

    $("select").change(function () { 
        $("#exemplo p").text($("option:selected").text()); 
    });

    $("textarea").select(function () { 
        $("#exemplo p").text("Texto Selecionado"); 
    });


});