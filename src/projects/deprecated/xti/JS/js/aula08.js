/*
	Author: Lucas
	Description: Estudo das vars, condições e loops javascript
*/

/* FUNCITION SIMPLES SEM PARAMETRO;

	function ola(){
		alert("Olá");
	}	
*/		
 
/* FUNCTION SIMPLES COM PARAMETRO;

	function dividir(x, y) {
		alert(x/y);
	}
	dividir(10,2);
*/	
	
/* FUNCTION COM RETORNO E ENTRADA DE PARAMETRO
	function soma(x, y) {
		return = x + y;	
	}
	alert(soma(10,2));
*/			
			
/* TESTE CONDICIONAL - TERNARIO	
	
	function testaIdade(x) {
	var crianca = x;
	return crianca >= 18 ? "maior de idade": "menor de idade";
	}
	
	alert(testaIdade(20));
*/

/* TESTE CONDICIONAL - IF/ELSE IF/ELSE	
	
	function testaSex(sexo){
		if(sexo=='M'){
			alert("Sexo Masculino");
		} else if (sexo=='F'){
			alert("Sexo Feminino");
		} else {
			alert("Dado incorreto");
		}
	}
	testaSex('M');	
*/	

/* SWITCH/CASE - NO BREAK

	function option(x){	
		switch(x){
		 
		case 1: 
			console.log("Você é lindo!");
		case 2: 
			console.log("Você é muito lindo!");		 
		case 3: 
			console.log("Você é lindão!");		 
		}
	}	
	
	option(1);
*/

/* SWITCH/CASE - BREAKING 

	function option(x){	
		switch(x)
		{
		 
		case 1: 
			console.log("Você é lindo!");
			break;
		case 2: 
			console.log("Você é muito lindo!");
			break;			
		case 3: 
			console.log("Você é lindão!");
			break;
		default:
			console.log("Você é legal");
		}
	}	
	
	option(1);
*/
	
/* LOOP WHILE  Só faz executa o bloco a condição while seja cumprido.
	var a = 0;
	
	while (a < 3){
	console.log("Seu Lindo! " + a);
	a++;
	}
*/
	
	
/* LOOP DO/WHILE  Executa o bloco  e verifica se condição while foi cumprida.
	var a = 0;
	
	do{
	console.log("Seu Lindo! " + a);
	a++;
	} while (a < 3);
*/

/*  LOOP FOR

	for(var i  = 0; i < 10 ; i++){
		console.log("Lucas " + i);
	}
*/

/*  LOOP FOR IN
	var Carro = {  // Criação de Objeto.
		
		marca: "Nissan",
		modelo:	"350Z",
		comprimento: "3.345mm",
		velocidade: "320km/h",
		cavalos: "350"
	};

	for(var atributos in Carro){
		console.log(atributos + " = " + Carro[atributos]);
	}
*/


	

	
