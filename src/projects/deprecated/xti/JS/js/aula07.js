/*
	Author: Lucas
	Description: Estudo dos operadores de javascript
*/
alert("Soma unária: -3 = " + (-3)); // operação unária
alert("Soma binária: 1 + 3 = " + (1+3));  // operação binária

/*
	1 e 3 são os operandos e o + é o operador, operações que possuem dois 
	operadores são chamados operadores binários, operações que possuem um 
	operando e um operador como (-1) são chamados de operação uniária.
*/

alert("Soma ternáriá: 1 + 3 + 5 = " + (1+3+5)); // operação ternária, possui 3 ou mais operandos.


var divisao = 9 / "4"; /*Como a única operação possível é de divisão, 
o javascript automáticamente convert a string "4" em um tipo number.*/

var soma = 9 + "4"; // Neste caso a concatenação leva prioridade

alert("Variável Soma = 9(number) + \"4\"(string) = " + soma + "\nVariável Divisão = 9(number) \/ \"4\"(string) " + divisao); 

/*
	OPERADORES MATEMATICOS:
	+		adição / concatenação
	-		subtração
	/		divisão
	*		multiplacão
	%		resto - ou seja 5 % 4 = 1, pois 5 / 2 = 2  desta divisão é 1
	++		incremento = +1
	--		decremento = -1
*/

var x = 4; 

var y = x++; /* Neste caso observe que o incremento está depois de X, sendo 
assim, o sistema primeiro irá atribuir o valor nativo de X e depois incrementar 
+1 em X*/

var z = ++x; /* Neste exemplo o valor de X receber o incremento antes do X, 
portanto, o javascript vai primeiramente incrementar a var x e depois referenciar z
como tendo o valor igual ao de x*/

alert("X = " + x + "\nY = " + y + "\nZ = " + z);

/*
	OPERADORES COMPARAÇÃO: Retorno sempre boolean
	==		igual
	===		valor e tipo igual - Operador de identidade
	>		maior
	<		menor
	!= 		diferente
	!==		valor e tipo diferente - Operador de identidade
	>= 		maior ou igual
	<= 		menor ou igual
	
	
	OPERADORES LÓGICOS:
	
	!		NOT (não)
	&&		AND (e)
	||		OR	(ou)
	
	OPERADORES ESPECIAIS:
	
	:?			operador ternario
					var idade = 6;
					var x = (idade >= 18)? "maior de idade": "menor de idade";
					alert("OPERADORES ESPECIAIS:\n Exemplo 1, teste ternário:\n Solução = "x);	

	,			separa expressões: random(1, 6); choose(1,2,3,4);
	
	delete		apaga operando, remove valor do atributo/propriedade.
					Pessoa{
						nome: "Lucas"
					}
					alert(Pessoa.nome);
					delete Pessoa.nome;
					alert(Pessoa.nome); retornará undefined;
				
	in			testa se existe propriedade especificada dentro do objeto 
				especificado: 
					alert("nome" in Pessoa); retornará true ou false. 
				
	instanceof  avalia se o objeto é do tipo indicado: 
					var idade = new Number(31);
					alert(idade instanceof Number); retornará = true;
				
	new			cria nova instancia de objeto
					var idade = new Number(31);
				
	this		referencia ao obje atual
					this.nome="Lucas";
					
	typeof		retorna o tipo do operandos
					
	()			chama função, entrada de parametros;
*/
	
//	Exemplo 1:

	


