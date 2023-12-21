/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre seletores jQuery
 * 
 * 
 */

 $(document).ready(function(){
    //Seletor total
    $("*").css("margin", "0px"); //Altera a margem de todos os elementos
    
    //Seletor de classe
    $(".classe_1").css("font-weight", "bold"); //Transforma todos os elementos da classe em questão em negrito
    
    //Seletor de elemento
    $("p").css("padding-left", "24px"); //Adiciona o padding-left em questao a todos os elementos p
    
    //Seletor de ID
    $("#el_1").css("color", "#FF0000"); //Altera a cor do elemento de id "el_1" para vermelhor
    
    //Seletor Multiplo
    $("h1, h3, h4").css("padding-top", "16px"); //Adiciona o padding-top para os elementos informados como param
 });