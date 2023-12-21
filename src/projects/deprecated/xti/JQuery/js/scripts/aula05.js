/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre seletores jQuery, Seletores de Filtros e de Conteudo
 *  Seletores que permitem você encontrar elementos com base na posiçao do indice e por conteudo
 * 
 * 
 */

$(document).ready(function () {
    //Em casos como esse vemos a importancia do uso do tbody, thead, tfoot

    /* SELETORES DE FILTROS BASICOS*/
    // $("tbody tr:first").css("background-color", "#ccc"); //seleciona somente no primeiro elemento
    // $("tbody tr:last").css("background-color", "#ccc"); //seleciona somente no ultimo elemento
    // $("tbody tr:not(#row_3)").css("background-color", "#ccc"); //Não selecionara o item especificado como param da function not()
    // $("tbody tr:even").css("background-color", "#ccc"); //seleciona somente elementos de indice impar
    // $("tbody tr:odd").css("background-color", "#ccc"); //seleciona somente elementos de indice par
    // $("tbody tr:eq(2)").css("background-color", "#ccc"); //seleciona elemento de indice igual ao number informado como param
    // $("tbody tr:gt(3)").css("background-color", "#ccc"); //seleciona elemento de indices maiores que o number informado como param
    // $("tbody tr:lt(3)").css("background-color", "#ccc"); //seleciona elemento de indices menores que o number informado como param

    /* SELETORES DE CONTEUDO*/
    // $("td:contains(Ficção Cientifica)").css("background-color", "#bbb"); // Seleciona todos os elementos que contem o texto especificado
    // $("td:has(strong)").css("color", "#f00"); //Seleciona todos os elementos que possuam outro elemento dentro de si de acordo com o param
    // $("td:empty").css("background-color", "#bb0"); //Seleciona todos os elementos que estão vazios, não possuem filhos nem mesmo textnodes
    // $("td:not(td:empty)").css("background-color", "#bb0"); //Com o uso de um filtro é possível realizar uma negação ao filtro de conteudo
    // $("td:parent").css("background-color", "#bbb"); // Seleciona todos os elementos que possuam filhos incluindo textnode

});