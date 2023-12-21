/*
	Descrição: Aula sobre Arrays
	Author: Lucas Barretto e Silva
	
*/

/*
	ARRAY
	
	var homens = new Array("Lucas", "Daniel", "Rafael");
	var mulheres = ["Camila", "Julia", "Eloina"];
	
	alert(homens[0]);
	alert(mulheres[1]);
*/

/*
	ARRAY MULTIDIMENSIONAL	
	
	
	var pessoas = new Array(new Array("Lucas", "M"), new Array("Daniel", "M") , new Array("Ronie", "M"));
	var perfil = [["Hugo", "M"],["Ronie", "M"], ["Igor", "M"]];

	alert (pessoas[1][0]);
	alert(perfil[1][0]);
*/

/*
	ARRAY ASSOSIATIVO
	
	var alimentos = {legumes:"Cebola", frutas: "Laranja"};
	
	alert(alimentos.legumes);
	
*/

/*
	FUNÇÕES DO ARRAY
	
	var frutas = ["Amora", "Laranja", 1, "Maracujá"];
	
	function todos (elem, ind, obj) {
		return (typeof elem == "string");
	
	}
	
	alert(frutas.every(todos));
	//Avalia se every elemento atendete a avalição estabelecida na function indicada como param e retorna true or false
	
	alert(frutas.some(todos));
	//Avalia se some elemento atendete a avalição estabelecida na function indicada como param  e retorna true or false.
	
	alert(frutas.filter(todos));
	//Avalia os valores  do Array que atendam a avaliação da function indicada como param e retorna os valores.


	var nomes = ["Lucas", "Rafael", "Camila"];
	
	function maiusculas (elem, ind, obj) {
		return (elem = elem.toUpperCase());
	}
	
	alert(nomes.map(maiusculas));
	// Remapea os elementos de acordo com a instrução especificada pela function indicada como param e retorna os valores.
*/

