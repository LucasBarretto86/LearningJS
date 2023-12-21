/*
	Author: Lucas Barretto e Silva
	Descrição: Estudo dados primitivos e objetos Javascript
	
	DADOS PRIMITIVOS
		boolean
		number
		string
	
	OBJETOS JAVASCRIPT
		Objetos			Function
		Boolean			Error
		Number			EvalError
		String			RangeError
		Array			ReferenceError
		Date			SintaxeError
		Math			TypeError
		RegExp			URIError
		
*/

/* BOOLEAN 
	var b = true; // Tipo primitivo
	alert(b);
	alert(typeof(b));
	alert(b instanceof Boolean);
	
	var b2 = new Boolean(false);  // Objeto Boolean
	alert(b2);
	alert(typeof(b2));
	alert(b2 instanceof Boolean);
	
	O construtor do Objeto Boolean, aceita sua inicialização, como boolean, 
	numeros, strings, null, NaN. Sendo que, no caso de number 0 = false, 1=true;
	no caso de string "" = false, "Qualquer conteúdo" = true; Para os demais
	todas os parametros que indicam ausencia de dados é false, por exemplo, null, 
	NaN.
	
	*Funciotns of Objeto Boolean:
	
		.valueOf(); return o valor do tipo primitivo atrelado ao Objeto.
		.toString(); return a representação em string do valor do Objeto.
	
*/ 

/* NUMBER 
	var num = 5; // Tipo primitivo
	alert(num);
	alert(typeof(num));
	alert(num instanceof Number);
	
	var num2 = new Number(3); // Objeto Number
	alert(num2);
	alert(typeof(num2));
	alert(num2 instanceof Number);
	
	Objeto Number, também  aceita uma string de numeros e os converte numeros primitivos encapsulados pela objetos Number.
	
	*Funciotns do Objeto Number;
		.valueOf(); return o valor do tipo primitivo atrelado ao Objeto.
		.toString(); return a representação em string do valor do Objeto.
		.toFixed(2); return o número com o número de casas decimais determinados no paramentro.
		.toPrecision(2); return o numero com a quantidade de digitos estipuladas no paramentro.
		
	*Propriedades
		.MAX_VALUE; Tras o maior valor aceito em anotação cientifica.
		.MIN_VALUE; Tras o menor valor aceito em anotação cientifica.
		.NaN; Tras uma referencia a NaN (Not a Number)
		.NEGATIVE_INFINITY; Return infinito negativo.
		.POSITIVE_INFINITY Return infinito positivo.	
		
	*Exemplo	
	var num = new Number(3);
	alert("num.toFixed(2), retornará: " + num.toFixed(2));
	alert("num.toPrecision(2), retornará: " + num.toPrecision(2));

*/ 

/* STRING
	var s = "Uma String"; // Tipo primitivo
	alert(s);
	alert(typeof(s));
	alert(s instanceof String);
	
	var s2 = new String("Novo texto");  // Objeto String
	alert(s2);
	alert(typeof(s2));
	alert(s2 instanceof String);
	
	*Funciotns of Objeto String;
	
		.charAt(2); return um char de acordo com a posição indicada no paramentro.
		.charCodeAt(3); return o padrao unicode do char na posição indicada no paramentro.
		.concat(" Texto concatenado"); concatena o valor de uma var ao valor indicado no parametro.
		.fromCharCode(152, 123, 115); convert um ou mais valores unicode em char;
		.indexOf("texto"); return o index de inicio de uma palavra ou char dentro da var relacionada e conforme a palavra ou char informada no paramentro.
		.lastIndexOf("Novo"); return o index de inicio da ultima ocorrencia de uma palavra ou char relacionada a var e de acordo com a palavra ou char indicada no paramentro.
		.toLowerCase(); convert todos os chars da String para letras minusculas.
		.toUpperCase(); covert todos os chars da String para letras maiusculas.
		.replace("texto", txt); substitui um valor indicado na String por outro valor informado. ambos sendo informados no paramentro.
		.match(re); usado para buscar valors atraves de RegularExpressions.
		.substring(5,8); recorta, uma string de acordo com o Index de inicio e de final informados no paramentro.
		.substr(5,3), recorta, uma string de acordo com o index inicial e mais o número de chars subsequentes informado como segundo paramentro.
		.slice(5,8); mesma funtion de substring, mas, mais rigorosa com a entrada de parametros.
		.split(",")[1]; split recorda a string e tras em um array de acordo com o separador informado como parametro.
		
	*Propriedades
		.length; Tras o numero de caracteres usados na string em questao.
		
	*Exemplo	
	var txt = "Um texto de exemplo"

	alert("var txt = \"Um texto de exemplo\";");
	alert("txt.length; retornará: " + txt.length);
	alert("txt.charAt(5); retornará: " + txt.charAt(5));
	alert("txt.charCodeAt(8); retornará: " + txt.charCodeAt(8));
	alert("txt.concat(\" mais texto concatenado\"); retornará: " + txt.concat(" mais texto concatenado"));
	alert("txt.indexOf(\"texto\"); retornará: " + txt.indexOf("texto"));
	alert("txt.lastIndexOf(\"texto\"); retornará: " + txt.lastIndexOf("texto"));
	alert("txt.toUpperCase(); retornará: " + txt.toUpperCase());
	alert("txt.toLowerCase(); retornará: " + txt.toLowerCase());
	alert("replace(\"texto\", \"txt\"); retornará: " + txt.replace("texto", "txt"));
	
	var re = /exemplo/;
	alert("var re = /exemplo/;")
	alert("txt.match(re); retornará" + txt.match(re));
	alert("txt.substring(3,8); retornará: " + txt.substring(3,8));	
	alert("txt.substr(3,8); retornará: " + txt.substr(3,8));	
	alert("txt.split(\" \")[1]; retornará: " + txt.split(" ")[1]);
*/		

/* ARRAY INDEXADOS
Um array trata-se de uma coleção de dados, no caso do array indexado, todo dado
inserido receberá um index de posição.

Construção de um array ocorre da seguinte forma:

var paises = new Array(); // construtor vazio
paises = {"Brasil, Argentina, Mexico, China"}
var paises = new Array("Brasil, Argentina, Mexico, China") // Construtor já com 
a inserção de dados.

	
*/ 



/*
	var Carro = {
		
		marca = "Nissan",
		modelo= "350Z",
		potencia: {
			cavalos : "350",
			velocidade : "320km/h"
		}
		
		
	};

*/