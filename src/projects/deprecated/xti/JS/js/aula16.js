/*
	Author: Lucas Barretto e Silva
	Description: Estudo sobre eventos e manipuladores, API's
*/

window.onload = function () {
	var btn = document.getElementById("btn_dom");
/*VENTOS VIA DOM 0*/
	// btn.onclick = function() {msgDOM0();};

/*EVENTOS VIA DOM 2*/
	// btn.onclick = addEventListener("click", msgDOM2, false);

/*addEventLister (nome evento, nome da função, propagação de evento)
  Neste caso, você não chama função você apenas informa o nome da função para o evento chame quando acionado, 
  do contrario, se você colocar a função assim que a pagina carregar a função sera chamada*/

/*OBJETO EVENTO*/
/* Compatibilidade de Eventos em navegadores*/
	// document.getElementById("btn_evt").onclick = function () {alert(window.event.type);}; // CHROME e IE
	// document.getElementById("btn_evt").onclick = function (evt) {evt.type;}; // SAFARI e OUTROS
	
/* Solução*/
	// document.getElementById("btn_evt").onclick = function () {
	// 	var evt = evt ? evt : window.event; // Teste Ternário
	// 	alert(evt.type);
	// };

/*PROPAGAÇÃO
	O JS propaga os eventos de cada elemento de dentro para fora 1 a 1, para inibir a progapagação
	dos demais eventos precisamos chamar o metodo stopPropagation() que impede a executação dos
	elementos do nivel acima;
*/

	// btn.onclick = function(){
	// 	alert("Botao");
	// 	window.event.stopPropagation(); // Função que interrope a propagação.
	// }

	// document.getElementById("teste").onclick = function (){
	// 	alert("Div Teste");
	// }

	// document.onclick = function(){
	// 	alert("Body");
	// }

/*CHAMADA DE EVENTO
	o this do JS é diferente do this do Java, o this do JS apenas funciona para acessar as propriedades 
	de um elemento, para atribuir uma relação de pertence. O this do JS é mais usado para validações de
	formulários, para uso do regex	
*/
	// document.getElementById("texto").onclick = function(){
	// 	alert(this.id);
	// }

	document.getElementById("texto").focus(); // função que tras o foco para o elemento
	document.getElementById("texto").onblur = function () {
			alert(this.value);	
	}
	// evento que estabelece uma função, podendo este ser chamado por outros elementos, conforme abaixo:

	btn.onclick = function(){
		document.getElementById("texto").onblur();
		}
		
	}

function msgDOM0() {
	alert("Evento via API DOM 0");
}

function msgDOM2() {
	alert("Evento via API DOM 2");

}
