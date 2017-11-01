 document.querySelector('#btnPassRetrieval').addEventListener('click',getData);

function getData() {

	var username = document.getElementById('txtUsername').value;
	var resultado = check_mail_get_name(username);
	if ( checkForm() == false) {
		if (!resultado.length == 0 || !resultado == null ) {
			var temporaryPassword = randomPassword(5);
		 	sendMail(temporaryPassword,username,resultado[0].fullName);
			 changeLostPassword(username,temporaryPassword);
		 	printSuccessError('El sistema ha enviado una constraseña temporal a su correo eléctronico.');
		}
    else {
			printMessageError('Error!! el nombre de usuario no existe en la base de datos.');
		}
	}
  else {
    printMessageError('Error!! por favor complete todos los espacios.');
	}
}

function checkForm(){
	var result= false;
	if(document.getElementById('txtUsername').value.length === 0){
		showError(document.getElementById('txtUsername'));
		result = true;

	}
	return result;

 }
