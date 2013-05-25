function validateBudget () {
	var success = true;
	var name = null;
	var phone = null;
	var email = null;
	var service = null;
	var message = null;
	name = document.getElementById ("name");
	phone = document.getElementById ("phone");
	email = document.getElementById ("email");
	service = document.getElementById ("service");
	message = document.getElementById ("message");	
	if (name == null || name.value == "") {
		alert ("Preencha o campo Nome.");
		success = false;
	} else if (phone == null || phone.value == "") {
		alert ("Preencha o campo Telefone.");
		success = false;
	} else if (email == null || email.value == "") {
		alert ("Preencha o campo Email.");
		success = false;
	} else if (service == null || service.value == "") {
		alert ("Preencha o campo Serviço.");
		success = false;
	} else if (message == null || message.value == "") {
		alert ("Preencha a Mensagem.");
		success = false;
	}
	return success;
}