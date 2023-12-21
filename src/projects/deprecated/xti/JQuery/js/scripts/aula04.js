/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre seletores jQuery
 * 
 * 
 */

 $(document).ready(function(){
    $("*").css("margin", "0px");
    $("p").css("padding-left", "24px");
    $("h1, h3, h4").css("padding-top", "16px");

    //Seletores Hierarquicos/Compostos

    // //Seletor parent > child
    // $("ul > li").css("border", "1px solid #000").css("width", "90px"); //Seleciona todos os elementos filhos de ul

    // //Seletor de descendentes
    // $("ul span").text("Seletor de descendentes!"); //Seleciona o primeiro elemento descendente de acordo com antecessor.

    // //Seletor do proximo elemento
    // $("#item_1 + li").css("border", "1px solid #000").css("width", "90px"); //Necessário ter um elemento prévio especifico, seleciona apenas o primeiro irmão

    // //Seletor de irmãos
    // $("#item_1 ~ li").css("border", "1px solid #000").css("width", "90px"); //Necessário ter um elemento prévio especifico, seleciona todos os irmão
 });