/*
    Author: Lucas Barretto
    Description: Estudo sobre BOM - Browser Objects Model

*/

/*WINDOW OBJECT
    O objeto window representa a classe mãe do BOM, todos os outros objetos e funções são filhas da classe mãe:
    Exemplo:
    window.alert()
    window.document.getElementById('')
    window.navigator

*/
window.onload = function() {
    //alert("Olá"); // igual window.alert("Olá"). Função apresenta uma mensagem na tela
    //confirm("Você está aprendendo JavaScript?"); // Função solicita uma confirmação "OK - Cancelar" na tela 
    //prompt("Informe seu nome:") // Função permitir o input de dados via pop-up
    //window.open("aula03.html", "Xti", "width=300, height=300, toolbar=no, location=no"); //Função permite a abertura de janelas customizadas
    //window.resizeTo(300,300); //Função para redimensionar o tamanho da janela 
    //window.moveTo(300,300); //Função para mover a janela para uma nova posição.
    
    /*DOCUMENT OBJECT*/
    //document.getElementById('teste').innerHTML = "Texto inserido via Script, via innerHTML";// Funçãp permite o input dentro de uma tag, neste caso usamos a tag span

    /*NAVIGATOR OBJECT*/
    //alert(navigator.plataform); // propriedade retorna a informção da plataforma de acesso ao conteudo
    //alert(navigator.userAgent); // prorpiedade retorna informçãoes sobre o agente de acesso ao site
    //alert(navigator.language); // propriedade retorna o idioma do usuario


    // var plugins = navigator.plugins; // propriedade retorna uma array com todos os plugins presentes no browser do usuario
    // var p = "";
    // for(var i = 0; i < plugins.length; i++ ){
    //     p += plugins[i].name + "\n";
    // }
    // alert(p);

    /*LOCATION OBJECT*/
    //alert(location.href); //propriedade retorna local aonde o arquivo html está armazenado
    //alert(location.protocol); //propriedade retorna o protocolo de publicação da página

    /*SCREEN OBJECT*/
    //alert(screen.width) // propriedade retorna a lagura da tela do usuario
    //alert(screen.height) // propriedade retorna a altura da tela do usuario

    /*HISTORY OBJECT*/
    //history.go(2); // função permite que o navegador avance ou retorne paginas de acordo com o valor seja informado como parametro.
    //history.back();
    //history.forward();



}