/**
 * 
 *  Author: Lucas Barretto
 *  Description: Estudo sobre seletores jQuery, Seletores de Atributos
 * 
 * 
 */

$(document).ready(function () {
    $("a[name]").css("background-color", "#bbb"); //Seleciona todos os elementos que possuem o atributo especificado dentro de []
    $("a[name=uol]").css("color", "#f00");//Seleciona todos os elementos que possuam o atributo specificado com o valor especificado 
    $("a[id|=exemplo]").css("background-color", "#ff5");//Seleciona todos os elementos que possuam o prefixo "exemplo" em seu valor, desde que este seja seguido por -
    $("a[href*=aula06]").css("color", "#0A0");//Seleciona todos os elementos que possuam "js" em seu valor, separado ou não, prefixo, sufixo ou embutido no valor.
    $("a[id$=1]").css("font-weight", "bold"); //Seleciona todos os elementos com valor terminado em "1", sufixo ou embutido no valor.
    $("a[id^=2]").css("background-color", "#0f5"); //Seleciona todos os elementos iniciados com "2", prefixo ou embutido no valor.
    $("a[id!=exemplo-1]").css("font-size", "18px"); //Seleciona todos os elementos exceto o elemento com o valor especificado.
});