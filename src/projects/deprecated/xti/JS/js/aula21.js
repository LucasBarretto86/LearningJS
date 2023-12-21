/**
 *  Author: Lucas Barretto e Silva
 *  Description: Estudo sobre o DOM CORE
 *  A API Core é a biblioteca mais generica do DOM
 */

window.onload = function () {

    /* NAVEGAÇÃO NA ARVORE DE NODES
     *
     * NODES = NÓS
     * Document Node = Representa o documento HTML como um todo
     * Element Node = Nós de elmentos são as tags
     * Attribute Node = São os atributos, como type, id, src e etc...
     * Text Node = É todo char presente no arquivo html, o conteudo escrito da página, o innerText. 
     * 
     * PARENTESCO DOS NODES (PAI, MÃE = PARENT/ FILHO = CHILD / FILHOS = CHILDREN / IRMÃO = SIBLING)    
     * 
     *  *** IMPORTANTE ***
     *  ________________________________________________
     * | NOVOS METODOS            |   METODOS ANTIGOS   |
     * | (exceto para textNode)   |  (e textNode)       |
     *  ------------------------------------------------ 
     * | parentElement            |   parentNode        |  
     * | children		          |   childNodes        |
     * | nextElementSibling	      |   nextSibling       |                    
     * | previousElementSibling	  |   previousSibling   |   
     * | firstElementChild	      |   firstChild        |
     * | lastElementChild	      |   lastChild         |   
     *  ------------------------------------------------
     */

    /* METODO PARA AUXILIAR NO ESTUDO, CRIA UMA BORDA AO REDOR DO ELEMNTO PARA FACILITAR A 
     * VISUALIZAÇÃO, SÓ PARA EVITAR O USO DO alert()*/

    function show(node) {
        node.setAttribute("style", "border: 1px solid #f00");
    }

    /* NAVEGAÇÃO
     * .parentElement = Retorna o pai do elemento
     * .children = Retorna uma lista dos filhos do elemento em questão
     * .children.length = Retorna o tamanho da lista
     * .children.item(0) ou .children[0] = retorna um elemento especificado de acordo com o param
     * .firstElementChild = Retorna o primeiro filho do node
     * .previousElementSibling =  Retorna o node irmão anterior
     * .nextElementSibling =  Retorna o proximo node irmão
     */

    /* EXEMPLO DE PARENT NODE*/
    // var divElement = document.getElementsByTagName('div').item(0);
    // show(divElement);
    // alert(divElement.parentElement);

    /* EXEMPLO DE CHILDREN NODE*/
    // alert(document.body.children);
    // alert(document.body.children.length);
    // show(document.body.children.item(0));
    // show(document.body.children[2]);

    /* EXEMPLO DE ELEMENT CHILD, FIRST AND LAST*/
    // var ulElement = document.getElementsByTagName('ul').item(0);
    // show(ulElement.firstElementChild); 
    // show(ulElement.lastElementChild);

    // var liElement = ulElement.children.item(0);
    // alert(liElement);
    // show(liElement.lastElementChild.lastElementChild.firstElementChild);

    /* EXEMPLO DE SIBLING NODE*/
    // var figElement = document.body.children[0];
    // alert(figElement);
    // show(figElement.nextElementSibling);

    /* RETORNAR CONTEUDO DOS NODES
     * .nodeName = Retorna o Nome do node
     * .nodeType = Retorna o tipo do Node (1 = Element / 2 = Attribute / 3 = Text)
     * .childNodes[0].nodeValue = Retorna o valor presente no textNode
     */

     /* EXEMPLO DE RETORNO DO CONTEUDO DOS NODES*/
     // var h2Element = document.getElementsByTagName('h2').item(0);
    // alert(h2Element.nodeName);
    // alert(h2Element.nodeType);
    // alert(h2Element.childNodes[0].nodeValue);   
    /* observe o uso do childNodes para trazer o textNode, pois, nodeValue retorna 
     * string e para isso element precisa ser um textNode*/


    /* CRIAÇÃO E MANIPULAÇÃO DE ELEMENTOS VIA DOM CORE
     *
     * CRIAÇÃO (sempre apartir do elemento document)
     *  document.createElement = função que cria um novo elemento/tags
     *  document.createTextNode = função para ciar elementos de texto
     *  document.createAttribute = função para criar atributos para os elementos
     * 
     */

    /* EXEMPLO DE CRIAÇÃO DE ELEMENTO SIMPLES*/
    var divElement = document.getElementsByTagName('div').item(0);
    var hr = document.createElement('hr');
    divElement.appendChild(hr);

    var li = document.createElement('li');
    li.appendChild(document.createTextNode("Novo Item"));
    
    var ulElement = divElement.firstElementChild;
    ulElement.appendChild(li);

    /*CRIAÇÃO DE ATRIBUTOS PARA ELEMENTO 
    * .value = recebe uma string com todo o conteudo css como value que queremos atrelar ao atributo
    * .setAttributeNode = recebe como param o objeto de atributo e set seu .value como valor css
    * .setAttribute = recebe como param o atributo que sera manipulado e uma string com os 
    *                 valores CSS, inclusive concatenando o attributeNode, mas, senão concatenado, 
    *                 quando usado o mesmo atributo o valor será subscrito
    *    
    */

    /*EXEMPLO DE CRIAÇÃO DE ATRIBUTOS PARA ELEMENTO*/ 
    // var attr = document.createAttribute("id");
    // attr.value = "lista";
    // ulElement.setAttributeNode(attr);
    // alert(ulElement.getAttribute('id'));
    
    /* EXEMPLO DE .setAttributeNode*/
    // var attr2 = document.createAttribute("style");
    // attr2.value = "background-color: #9CF; font-size: 24px;"; 
    // ulElement.setAttributeNode(attr2);

    /* EXEMPLO DE .setAttribute*/
    // ulElement.setAttribute("style", attr2.value + "color:#666;"); 
    // ulElement.setAttribute("style", "font-weight:bold;"); // 

    /* EXEMPLO DE ELEMENTO MAIS COMPLEXO*/
    var select = document.createElement('select');
    var option = document.createElement('option');
    var option2 = document.createElement('option');
    var option3 = document.createElement('option');

    option.setAttribute("value", "DF");
    option.appendChild(document.createTextNode("Distrito Federal"));
        
    option2.setAttribute("value", "SP");
    option2.appendChild(document.createTextNode("São Paulo"));
        
    option3.setAttribute("value", "RJ");
    option3.appendChild(document.createTextNode("Rio de Janeiro"));
        
    select.appendChild(option);
    select.appendChild(option2);
    select.appendChild(option3);

    document.body.appendChild(select);

    /* ALTERAÇÃO DE ELEMENTOS
     * sempre apartir do elementO que herdará o novo elemento, ou que será manipulado
     * 
     *  .appendChild = função que herda um novo elemento como filho
     *  .removeChild = função que remove elementos recebendo como para a ref do elemento a ser cancelado
     *  .replaceChild = função que permite alteração de um elemento por outro, recebe como param (novo elmento, antigo lement)
     *  .cloneNode = função que permite copiar elementos, recebe como para um boolean
     *               true para copiar todos os elementos filhos e false, para copiar apenas
     *               o elemento inicial
     *     
    */

    /*EXEMPLO DE REPLACEMENT DE ELEMENTO*/
    // var option5 = document.createElement('option');
    // option5.setAttribute("value", "None" );
    // option5.appendChild(document.createTextNode("Alteração"));
    // select.replaceChild(option5, option);

    /*EXEMPLO DE REMOÇÃO DE ELEMENTO*/
    // var elementDelete = divElement.firstElementChild;
    // divElement.removeChild(elementDelete);

    /*EXEMPLO DE CLONAGEM DE ELEMENTO*/
    // var figElement = document.getElementsByTagName('figure').item(0);
    // var clone = figElement.cloneNode(true);
    // document.body.appendChild(clone); 
  

}