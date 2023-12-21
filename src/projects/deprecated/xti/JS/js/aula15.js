/*
	Author: Lucas Barretto
	Descrição: Aula sobre funções.

*/

/*FUNÇÕES
	Há três tipos de funções; declarativa, anonima e literal

	FUNÇÃO DECLARATIVA - Modo nativo, muito usado na linguagem.
		function soma(x, y){
			console.log(x + y);
		}
		
		soma(2,5);

	FUNÇÃO ANONIMA
		var soma = new Function("x", "y", "console.log(x + y)");
	    soma(2,5);

	FUNÇÃO LITERAL - Muito usado para manipulação de eventos.
		var somar = function (x, y){
			console.log(x + y);
		}

		soma(5,8);
	
	EXEMPLO COM MANIPULAÇÂO DE EVENTOS:
		window.onload = function() {
			alert("Seja Bem-vindo!");
		}
	
		window.onload = function() {
			document.getElementById("literal").onclick = function(){
			alert("Seja Bem-vindo!");
			}
		}
		

*/


/* FUNÇÃO DECLARATIVA SIMPLES 

function somar(){
	console.log(1 + 2);
}

console.log(soma());

*/


/* FUNÇÃO DECLARATIVA COM PARAMETROS 

function somar(x, y){
	console.log(x + y);
}

console.log(soma(1, 5));
*/


/* FUNÇÃO DECLARATIVA COM RETORNO, COM E SEM PARAMETROS

function mostraNome(){
	return "Lucas Barretto";
}	

console.log(mostaNome());

function soma(x, y) {
	return x + y;
}

console.log(soma(1, 5));
*/
