/*
	Author: Lucas Barretto e Silva
	Descrição: Estudo sobre o Objeto DATE
*/

/*CONSTRUTORES  DO OBJETO DATE*/

/*
SEM PARAMENTRO:
Instancia novo objeto com a data atual local.

var data = new Date(); 
alert(data);
*/

/*PARAMETRO DE MILLISEGUNDOS: 
Instancia novo objeto de acordo com os millisegundos informados no param, 
considerando que o javascript considera a data 0 igual a 01/Jan/1970, param
também aceita millisegundos negativos para datas que sejam antes da data 0.

var data = new Date(123456);  
alert(data);
*/

/*PARAMENTRO STRING
Permite inicializar com base em uma string desde que informada de acordo com o
padrão do exemplo abaixo, pois, provavelmente o esse construtor considerar uma
Regular Expression para definir a data.

var data = new Date("Jul/20/2011 02:30:35"); 
alert(data);
*/

/*COM VARIOS ATRIBUTOS COMO PARAMENTRO
Permiti a inicialização informando, ano, mes, data, hora, minutos e segundos, 
os parametros minimos para essa inicialização são o ano e o mes, os demais
params são opcionais.

var data = new Date(2017, 01, 16, 14, 01, 35);
alert(data);
*/

/*
METODOS GETTERS
getDate()	Get dia como um numero entre (1-31)

getDay()	Get semana como um numero entre (0-6)
	exemplo:
		var data = new Date();
		var dias = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabádo"];
		alert(dias[data.getDay()])
		
getFullYear()		Get o ano atual com quadro digitos(yyyy)
getHours()			Get a hora do dia local como um numero entre (0-23)
getMilliseconds()	Get os milisegundos(0-999)
getMinutes()		Get os minutos atuais (0-59)
getMonth()			Get o mes atual do ano atual (0-11)
getSeconds()		Get os segundos atuais entre (0-59)
getTime()			Get pega os milisegundos atuais considerando a data 0 (Jan 1, 1970)
toDateString(); Retorna uma String que retorna a data. (Wed Jan 17 2018)
		exemplo:
		var data = new Date();
		alert(dias[data.toDateString()]);

toLocaleDateString(); Retona uma String que retorna a data por extenso (17/01/2018)
	exemplo:
		var data = new Date();
		alert(data.toLocaleDateString()); 

todos os metodos acima tem seu equivalente para UTC.
*/



/*
METODOS SETTERS
setDate()			Set o dia recebe um numero de (1-31) como param
setFullYear()		Set o ano com quatro dias recebendo numeros como param (recebe Mês e dia como opcionais)
setHours()			Set a hora recebendo numero de (0-23) como param
setMilliseconds()	Set milliseconds recebendo numeros de (0-999) como param
setMinutes()		Set minutos recebendo numeros de (0-59) como param
setMonth()			Set mes  recebendo numeros de (0-11) como param
setSeconds()		Set segundos  recebendo numeros de (0-59) como param
setTime()			Set o tempo  recebendo numeros de milliseconds como para a contar des Jan 1, 1970
*/

		

