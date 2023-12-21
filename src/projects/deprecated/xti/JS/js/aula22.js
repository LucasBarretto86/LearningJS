/**
 *  Author: Lucas Barretto e Silva
 *  Description: Estudo sobre o AJAX = ASYNCHRONOUS JAVASCRIPT AND XML
 */

window.onload = function () {

    var botao = document.getElementById('botao');

    botao.onclick = function () {
        var ajax = new XMLHttpRequest(); // cria o objeto AJAX
        var div = document.getElementById('response');


        ajax.onreadystatechange = function () {
            if (ajax.readyState == 2 || ajax.readyState == 3) {
                carregando(div);
            }
            /* .onreadystatechange = eventlistener do status da conexão, manipulador que recebe o 
             *  status da conxao sempre que houve alterações
             * 
             * .readyState = Propriedade que tras o número de status da conexão                                 
             * 0 = Conexão não estabelecida, 
             * 1 = Inicio de comunicação, comunicação estabelecida
             * 2 = Inicio de requisição, envio de requisição
             * 3 = servidor processando a requisição, 
             * 4 = servidor enviou resposta, resposta recebida 
             */
            if (ajax.readyState == 4) {
                /* PROPRIEDADES DE RECEBENDO DE RESPOSTAS 
                 * .status = tras numero de status da requisição: 404 = pagina não encontrada, 200 = requisição de documento bem recebida 
                 * .statusText = tras um texto que especifica o status da requisao em texto
                 * .responseXML = tras o resultado da requisição em XML
                 * .responseText = tras o resultado da requisição em texto
                */

                /*RECEBENDO XML*/
                // var xml = ajax.responseXML; // recebe o arquivo xml, como um document
                // var texto = xml.getElementsByTagName('texto')[0].firstChild.nodeValue; // tras o filho de uma tag especifica e seu nodeValue
                // div.appendChild(document.createTextNode(texto)); // append o conteudo da tag texto a div

                /*RECEBENDO TEXTO*/
                // div.appendChild(document.createTextNode(ajax.responseText)); // recebe o texto do txt, mas, não aceita chars complexos

                /*RECEBENDO HTML*/
                // div.innerHTML = ajax.responseText; // recebendo elementos html, deve ser lançado como inner, para que as tag sejam interpretadas

                /*EXEMPLO PARA CRIAÇÃO DE LOADING */
                setTimeout(loadingResponse, 2000); // função apenas para forçar o sistema ter um delay para apresentar o resultado
            }
        }

        /*.open(metodo, url, async) = metodo que estabeleca a conexão com arquivo ou serve, importante sempre informar um url de servidor e não um arquivo direto
                    metodo = "POST" para grandes quantidades de dados, "GET" pequenas quantidades
        *           url = ULR, endereço do servidor ou arquivo etc..
        *           async = boolean para determinar se true = asynchronous ou false = synchronous *opcional*
        * 
        * .send() = param1 = função que inicial a requisição com o servidor, podendo receber parametros 
        * */

        //ajax.open("GET", "ajax/arquivo.xml"); // acessa o arquivo, endereço do server etc.. 
        // ajax.open("POST", "ajax/arquivo.txt"); // acessa o arquivo, endereço do server etc..
        // ajax.open("POST", "ajax/arquivo.html"); // acessa o arquivo, endereço do server etc..
        ajax.open("GET", "ajax/arquivo.xml");
        ajax.send(); //
        return false;

        /*EXEMPLO DE CRIAÇÃO DE LOADING DE PROCESSAMENTO*/
        function carregando(element) {
            while (element.hasChildNodes()) {
                element.removeChild(element.lastChild);
            }
            var figure = document.createElement('figure');
            figure.setAttribute("style", "margin: 0; width: 100px; text-align: center");

            var img = document.createElement('img');
            img.setAttribute("src", "css/img/ajax-loader.gif");
            img.setAttribute("style", "width: 15px; height: 18px;");

            figure.appendChild(img);
            element.appendChild(figure);
        }

        //FUNÇÃO PARA TRASER A RESPOSTA
        function loadingResponse() {
            div.removeChild(div.lastElementChild);
            var xml = ajax.responseXML;
            var texto = xml.getElementsByTagName('texto')[0].firstChild.nodeValue;
            div.appendChild(document.createTextNode(texto));
        }

    }
}
