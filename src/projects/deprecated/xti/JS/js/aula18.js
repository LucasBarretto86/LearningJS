/*
    Author: Lucas Barretto
    Description: Estudo sobre BOM - TEMPORIZADORES e COOKIES

*/

var light;

window.onload = function () {
    light = document.getElementById("light");
    light.onclick = ligar; //Callback referenciado função porém, é possível informar um código js usando "" para chamar a função especifica = "ligar()"
    setInterval(setHorario, 1000); // Temporizador que chama a funcao referenciada como param dentro do interlavo informado como para em milisegundos.

}

function ligar() {
    light.src = "css/img/light_on.png";
    document.body.style.backgroundColor = "#fff";
    //document.getElementById("hora").style.color = "#000";
    setTimeout(desligar, 5000); //Chama uma função e seta em millisegundos o tempo de delay para execução, paramentros são função, tanto referencia 
    //como com uso de aspas e tempo em millisegundos


   var name = readCookie("nome");

    if (name == null || name == "") {
        name = prompt("Informe seu nome");
        try {
            writeCookie("nome", name, 1);
        } catch (e) {
            alert("Erroouuu");
        }
    }
    document.getElementById("nome").innerHTML = "Olá " + name + "!";
}


function desligar() {
    light.src = "css/img/light_off.png";
    document.body.style.backgroundColor = "#000";
    //document.getElementById("hora").style.color = "#fff";
}

function setHorario() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var time = (hour < 10 ? "0" + hour : hour) + ":"
        + (minute < 10 ? "0" + minute : minute) + ":"
        + (second < 10 ? "0" + second : second); // seta string concatenando a hora os minutos e segundos do objeto date

    document.getElementById("hora").innerHTML = time;  // escreve no html a string hora
}
