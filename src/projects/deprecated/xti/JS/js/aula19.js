/*
    Author: Lucas Barretto
    Description: Estudo sobre DOM - localStorage

*/

window.onload = function () {
    var text = document.getElementById("texto");
    var bGravar = document.getElementById("gravar");
    var bExibir = document.getElementById("exibir");

    bGravar.onclick = function () {
        localStorage.setItem("meuTexto", text.value);

    }

    bExibir.onclick = function () {
        text.value = localStorage.getItem("meuTexto");
    }
}
