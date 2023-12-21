/*	Method: calcularIMC();
	
	Author: Lucas Barretto e Silva
	Description: Calculo do Indice de Massa Corporal, exercisio de JavaScript
	
*/
function calcularIMC(){
	var formulario = document.getElementById("formulario");
	var peso = +formulario.kilos.value;	
	var centimetros = +formulario.centimetros.value;
	var sexo = formulario.sexo.value;
	
	resetResults(); // reseta os dados no inicio para os valores sejam zerados;
	
	if(sexo!='' && sexo!=null){
		setVisible(sexo, true);
		
		if(peso > 0 && centimetros > 0){
			var altura = centimetros/100;
			var imc = peso/(altura*altura);
			formulario.imc.value = imc.toFixed(2);
			
			if(sexo=="masc"){		
				if(imc < 20){
					selectRow("mabaixo");
				} else if(imc >=20 && imc <25) {
					selectRow("mregular");
				} else if(imc >=25 && imc <30) {
					selectRow("macima");
				} else if (imc >=30){
					selectRow("mexcesso");
				}	
				
			} else if (sexo=="femi")		
				if(imc<19){
					selectRow("fabaixo");
				} else if(imc >=19 && imc <24) {
					selectRow("fregular");;
				} else if(imc >=24 && imc <29) {
					selectRow("facima");
				} else if (imc >=29){
					selectRow("fexcesso");
				}			
				
		} else {
			alert("Verifique se os dados foram prenchidos corretamente!");
			cleanInput(formulario);
		}
	} else {
		alert("Por favor, preencha todos os campos");
		cleanInput(formulario);
	}
}

/*	Method: setVisible();
	
	Author: Lucas Barretto e Silva
	Description: Edita o CSS a fim de ocultar ou apresentar a tabela de 
	classificação de peso de acordo com o sexo do usuário informado no input
	radio.
	
*/
function setVisible(elementId, isVisible){
	if(isVisible){
		document.getElementById(elementId).style.display = "table";
	} else {
		document.getElementById(elementId).style.display = "none";
	}
}

/*	Method: resetResults();
	
	Author: Lucas Barretto e Silva
	Description: Simplesmente limpa os dados preenchidos toda vez que a pagina é
	carregada.
	
*/
function resetResults(){
	setVisible("masc", false);
	unselectRow("mabaixo");
	unselectRow("mregular");
	unselectRow("macima");
	unselectRow("macima");
	unselectRow("mexcesso");
	
	setVisible("femi", false);
	unselectRow("fabaixo");
	unselectRow("fregular");
	unselectRow("facima");
}	

/*	Method: cleanInput();
	
	Author: Lucas Barretto e Silva
	Description: Limpa os dados preenchidos toda vez que o usuario click no
	botao de calculo e os dados estão incorretos ou ausentes.
	
*/
function cleanInput(formulario){
	formulario.kilos.value="";
	formulario.centimetros.value="";
}

/*	Method: selectRow();
	
	Author: Lucas Barretto e Silva
	Description: Modifica o CSS da linha da tabela de IMC de acordo com o resultado
	do usuário após a realização do calculo.
	
*/		
function selectRow(elementId){
	document.getElementById(elementId).style.backgroundColor = "#4B6C96";
	document.getElementById(elementId).style.color = "#FFFFFF";
}

/*	Method: unselectRow();
	
	Author: Lucas Barretto e Silva
	Description: limpa a função selectRow, de modo que o CSS fique de modo default.
	
*/
function unselectRow(elementId){
	document.getElementById(elementId).style.backgroundColor = "#FFFFFF";
	document.getElementById(elementId).style.color = "#000000";
}
