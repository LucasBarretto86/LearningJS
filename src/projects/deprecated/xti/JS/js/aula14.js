/*
	Author: Lucas Barretto e Silva
	Descrição: Estudo sobre Regular Expressions

*/

/*	INICIALIZAÇÃO DO OBJETO 
	
	Inicializando com new e informando a expressão regular como primeiro param:
	
	var regex = new RegExp("JavaScript"); 
	
	var regex_2 = /JavaScript/; Inicializando de forma simplificada, 
	
	Mas, também é possível receber os modificadores como param adicional, tanto na
	inicialização com new como literal.
	
	Os modificadores existem para tornar a regular expression mais "acessível".
*/

/*    MODIFICADORES
	
	i - Inicialmente a regular expression é case sensitive, porém, com o uso do
		modificador i a regular expression irá suprimir o case senstive:
		
		Ex: 
			var regex = /javascript/;
			alert(regex.test("JavaScript")); // Retornará false
			
			var regex_2 = /javascript/i; // ou new RegExp("javascript", "i");
			alert(regex_2.test("JavaScript")); // Retornará true
			
	g - Faz com que o script continue buscando por ocorrencias da regexp em uma 
		string.
	
*/
	
/*   FUNÇÕES NATIVOS DA REGEXP
	
	.test(); - Retorna um boolean caso seja encontrada a regular expression 
			   indicada como param.
		Ex.:
			var regex = /JavaScript/;
			alert(regex.test("JavaScript"));
			
			
	.exec(); - Retorna a primeira ocorrência de conteúdo que atende a 
			   expressão regular.
			   
		Ex.:
			alert(/doce/i.exec("Qual é o doce, mais doce? É o doce de batata doce."));
*/

/*    FUNÇÕES DO OBJETO STRING ATRELADOS AS REGEXP

		
	.match(); - Se informado uma regExp como param, o script buscará por 
				ocorrencia daa regExp na string que chamou o metodo, se usados os 
				modificadores i e g serão retornada todas as ocorrencias, com letras 
				maiusculas ou minusculas.
	
		Ex.:
			var string = "Qual é o Doce, mais dOce? É o doCe de batata docE.";
			string.match(/doce/);
*/


/*   METACARACTER
	
	. - Busca a ocorrencia de qualquer caracter com exceção de novas linhas.
		
		Ex.:
			var string = "Pier " + 21 + "\nPier 21";
			alert(string.match(/./));
			alert(string.match(/./ig));
		
		
	\w (w minusculo) - Busca a ocorrencia de qualquer caracteres de a-Z não 
		acentuadas, 0-9 e underline(_).
		
		Ex.:
			var string = "Eu, não, mas, você sim. Lucas_Barretto? '- - ";
			alert(string.match(/\w/ig));

			
	\W (W maiusculo) - Busca a ocorrencia de caracteres com acento e caracteres 
		especiais exceto underline (_) e espaço.
	
	
	\s - Busca a ocorrencia de espaços.

		Ex: 			
			var string = "Eu, não, mas, você sim. Lucas_Barretto? '- - ";
			alert(string.match(/\s/ig));

			
	\d - Busca pela ocorrencia de digitos.

		Ex.:
			var string = "Pier " + 21 + "\nPier 21";
			alert(string.match(/d\s/ig));

			
	^ - Buscar palavras ou caracteres que iniciem com o valor indicado dentro 
		da RegExp.
	
		Ex.:
			var string = "Pier21";
			alert(/^21/.test(string)); 
			Retorna false, pois a string não é iniciada com 21.
			
			alert(/^P/.test(string)); 
			Retorna true, pois a string é iniciada com P
			
			
	$ - Buscar palavras ou caracteres que terminem com o valor indicado dentro 
		da RegExp.
	
		Ex.:
			var string = "Pier21";
			alert(/21$/.test(string)); 
			Retorna true, pois, string termina com 21
			
			alert(/P$/.test(string));  
			Retorna false pois, string não termina com P
	
	Também é possível a utilização de outros metacaracters.
	
		Ex.:
			var string = "Pier21";
			alert(/\d\d$/.test(string)); 		
*/

/*	Exemplos de uso dos metacaracters juntos.
	
		var cep = "09910-170";
		alert(/^\d\d\d\d\d\-\d\d\d$/.test(cep));
		
		var cpf = "000.000.000-12";
		alert(/\d\d\d\.\d\d\d\.\d\d\d\-\d\d$/.test(cpf));
*/

/*    QUANTIFICADORES   
	São utilizados juntamente com metacaracters para quantificar o número de 
	ocorrencias do regExp definido, podem ser utilizados um ou mais.

	* - Verifica a ocorrencia de 0 ou mais.
		
		Ex.:
			alert(/\d*'barra invertida'.test("Pier")); 
			leia-se '/' aonde está escrito 'barra invertida', Retorna true pois 
			há ocorrencia de zero ou mais vezes, neste caso ha 0.
			
			
	+ - Verifica a ocorrencia de 1 ou mais.
		
		Ex.:
			alert(/\d*+/.test("Pier")); 
			Retorna false pois há ocorrencia de uma ou mais vezes, neste caso 
			não há numero portanto retorna false.
			
			
	? - Verifica a ocorrencia de 0 ou 1 vez.
		
		Ex.:
			alert(/\d*?/.test("Pier21")) 
			Retornará true pois, verifica se há 0 ou 1 \d.		

			
	{} - Verificar a ocorrencia de de acordo com o numero de vez estibulado 
		 dentro das chaves.
		
		Ex.:
			alert(/\d{2}/.test("Pier21"));
			Retornará true, pois, atende o paramentro do quantificador

			
		Também é possivel estipular um range com a inclusão de dois paramentros 
		divividos por virgula.
		
		Ex.: 
			alert(/\d{2}\/\d{2}\/\d{2,4}$/.test("21/12/80"));
			alert(/\d{2}\/\d{2}\/\d{2,4}$/.test("21/12/1980"));
			Ambos são true, pois, o nosso range para os digitos finais é de 2 
			ou 4 ocorrencias. 
*/			

/*	Exemplos de uso dos metacaracters e quantificadores.
		
		var cep = "09910-170";
		alert(/^\d{5}-\d{3}$/.test(cep));
		
		var cpf = "000.000.000-12";
		alert(/^\d{3}.\d{3}.\d{3}-\d{2}$/.test(cpf));
		
		var email = "mohamed28.lucas@gmail.com"
		alert(/\w+@\w+\.\w{2,3}/.test(email));
		
*/

/*	AGRUPADORES
	[] - Permite a ocorrencia de palavras com multiplos valores sejam localizadas.
	
		Ex.:
		alert(/cau/.test("cau"));
		Retorna true, pois é exatamente o que foi estibulado.
		
		alert(/cau/.test("ceu"));
		Retorna false, pois diverge do que foi estibulado.

		alert(/c[ae]u/test("cau"))
		alert(/c[ae]u/test("ceu"))
		Ambas retornam true, pois, o agrupador informa que a variação
		de a/e é pemiritida. 

		alert(/\d[\d\,]+/.test(23, 24));
		Retorna true, pois, a ocorrencia de 1 digito ou mais e virgula foram
		indentificados.

*/

/*  BUSCAS E SUBSTITUIÇÕES

Para efetuarmos a busca e a substituição, utilizamos as funções do objeto String
	Ex:
		var str = "Qual é o Doce mais dOce que um doCe?";
		alert(str.match(/doce/ig));
		alert(str.replace(/doce/ig, "docinho"));

		var str = "O rato roeu a roupa do rei de roma.";
		alert(str.match(/r/ig));
		alert(str.replace(/r/ig, "g"));

Em casos mais complexos podemos criar variáveis dentro de uma RegExp, 
para tornar o processo de substituição, a criãção das variávels se da
pelo uso de () dentro da RegExp que posteriomente é referenciado um a um
da seguinte forma $1, $2, $3, $4, $5..Etc  

	Ex:

		var url = "www.kit3sentertainment.com/catalog/games.html";
		Primeiramente foi estabelecido a string url.

		var re = /www.kit3sentertainment.com\/(\w{2,})\/(\w{2,})\.html/;
		Depois, foi criada de forma literal uma RegExp, observe o primeiro ()
		é usado após .com, neste caso aquele segmento da RegExp será referenciada
		como $1, em seguinda novamente outro parenteses, portanto, $2.

		alert(re.test(url));
		Retorna true, pois a RegExp está batendo com a String.

		alert(url.replace(re, "http://kit3s.com/$2/$1.jsp"));
		Realiza a substituição, usando as variaveis criadas na RegExp, 
		neste caso invertendo o que seria $1 por $2.
*/