/**
 *  Author: Lucas Barretto e Silva
 *  Description: Estudo sobre o DOM HTML
 *  A API HTML contem todos os elementos e propriedades do proprio html é uma API especialista em HTML
 **/

window.onload = function () {
    var bConfirm = document.getElementById("button_confirm"); // retorna o e-mail identificado pelo id informado como param
    var buttons = document.getElementsByClassName("buttons"); // retorna uma collection de todos os elementos que possuem a classe "button"
    var imgs = document.getElementsByTagName('img'); // retorna uma collection de todos os elementos de tag 'img';
    var img1 = document.getElementsByTagName('img')[0]; // puxa diretamente o elemento estipulado pela tag 'img' já puxando um index especifico

    // alert(imgs);

    // var bCancel = document.querySelector("#button_cancel"); // recebe como paramentro os elementos de acordo com o código css   
    // // query = document.querySelector("table > tr > th"); // outros exemplo de como ele pode trazer um elemento pelo css;
    // // query = document.querySelector("ul > li"); // outro exemplo
    // bCancel.onclick = function () {
    //     alert("Cancelado!");
    // }


    var tit = document.getElementsByTagName('h2')[0]; //lembrar que trazer o elemento pela tag sempre retorna uma collection mesmo que a tag seja usada apenas uma vez

    tit.innerHTML = "Novo Titulo"; //Alterando elemento via BOM, innerHTML não é certificado pela W3C
    //tit.style.color = "#fff";  // Alterando elemento pela API DOM HTML
    tit.setAttribute("style", "color: #fff"); // Alterando elemento pela API DOM Core

    //img1.border = "6px"; // outro exemplo via DOM HTML
    img1.setAttribute("border", "6px"); // outro exemplo via DOM Core


    /*COLEÇÕES DE ELEMENTOS*/
    // var img = document.images; // Recebe um array com todas as imagens da pagina, na ordem da esqueda para a direita de cima para baixo.
    // for(var i = 0; i < img.length; i++){
    //     this.alert(img[i].alt);
    // }

    // alert(img.item(0)); // retorna o item presente no array recebendo o index como param
    // alert(img[0]); // retorna item diretamente pelo array
    // alert(img.namedItem("livre")); // recebe epemento pelo nome descrito na propriedade name da tag

    // var lks = document.links; // Recebe um array com todos os links presentes na pagina
    // lks[0].alt = "Link 1" // Seta a propriedade alt do link de index 0

    // var forms = document.forms; // recebe um array com todas as forms presentes no site
    // forms[0].

    /* ALTERAR ELEMENTOS */
    // var tb = document.getElementsByTagName("table")[0]; // getElementsByTagName retorna um array com todos os elementos que possuiem a tag informada no param
    // var row = tb.insertRow(-1); // após trazer o elemento, usamos uma função para inserir um nova row aonde o param é a posição da nova row, sendo -1 = a ultima linha
    // var cell1 = row.insertCell(0); // em um objeto row a função inseri uma nova celula na posição informada no param
    // var cell2 = row.insertCell(1);

    // cell1.appendChild(document.createTextNode("Text 1")); /* função appendChild pemiti atrelar um novo elemento ou conteudo a celula cell1, neste caso usamos o objeto 
    //                                                         documento para inserir um conteudo atraves da função createTextNode(), que recebe como para uma string*/
    // cell2.appendChild(document.createTextNode("Text 2"));


    /* EXEMPLO DE USO DOS METODOS E ELEMENTOS SENDO UTILIZADOS PARA ALTERAÇÕES*/
    var tb = document.getElementsByTagName("table")[0];
    var bAdd = document.getElementById("button_confirm");
    var bRemove = document.getElementById("button_cancel");

    bAdd.onclick = function () {
        addLine(tb, document.getElementById("nome").value, document.getElementById("peso").value);
        // var imgs = document.images;
        // for (let index = 0; index < imgs.length; index++) {
        //     addLine(imgs[index].alt, imgs[index].src);
        // }
    }

    bRemove.onclick = function () {
        removeLine(tb, 1);
    }
}

function addLine(table, text1, text2) {

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.appendChild(document.createTextNode(text1));
    cell2.appendChild(document.createTextNode(text2));
}


function removeLine(table, row) {
    table.deleteRow(row);
}
