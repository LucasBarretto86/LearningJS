/*
	Author: Lucas Barretto e Silva
	Descrição: Estudo sobre as exceções do Javascript
	
	
	OBJETO ERROR / CLASSE ERROR
	
		atributo e funções:
		
			message;
			name;
			toString();
		
		Errors:
			EvalError				Erro usando Eval()
			RangeError				Número extrapola limites
			ReferenceError			Referencia a valor indefinido
			SintaxeError			Erro data Sintaxe da Linguagem
			TypeError				Operando diferente do operando esperado
			URIError				Uso errado de funções URI
	
*/

/*
	TRY/CATCH 
	
	try {
		var x = a;
		var b = x - 1;
		alert(b);
	} catch (e) {
		alert(e.toString());
		alert(e.name + " " + e.message);
	}

*/

/*	
	THROW EXCEPTION
	
	var y = prompt("Informe um numero menor que 10:");

	try {
		
		if(y > 10) {
			throw "Número maior que dez!";
		}
		
		alert(y);
		
	} catch (e) {
		alert(e.toString());
	}
*/


