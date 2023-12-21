/*
	Autor: Lucas Barretto e Silva
	Descrição: Validação de CPF e E-mail, com uso do RegExp,
				com direcionamento para nova URL.
*/
	var cpf, email;

function validation() {
	var cpfRegex = /(\d{3})(\d{3})(\d{3})(\d{2})/
	var emailRegex = /\w+@\w+\.\w{2,3}/;

	cpf = document.getElementById('cpf').value;
	email = document.getElementById('email').value;


	if(emailRegex.test(email) && cpfRegex.test(cpf) && !null) {
		cpf = cpf.replace(cpfRegex, "$1.$2.$3-$4");

		alert("Your e-mail and CPF are valid!\n"
			  + "CPF: " + cpf + "\nE-mail: " + email);
		
	} else {

		alert("Your information cannot be validated! Please try again!")
	}
	return "redirect:pagina2.html";
}
