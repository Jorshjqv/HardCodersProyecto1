var inputUsername = document.getElementById("txtUsername");
var inputPassword = document.getElementById("txtPassword");



if (document.getElementById("btnSubmit")!=null){
	var btnSubmit = document.getElementById("btnSubmit");
	btnSubmit.addEventListener(
				"click",
				function(){
					checkPassword(
						String(inputUsername.value),
						String(inputPassword.value)
					);
				
				}
			);
}

function checkPassword(pUserName,pPassword){
	

	var resultExistsUser =check_if_user_exists(pUserName,pPassword);

	if ( checkForm() == false) {
		if (resultExistsUser.result == 1 ) {
			validate_username_password(pUserName,pPassword);
			window.location.href='../../views/event/event_list.php';
		}else {
			printMessageError('Error!! el nombre de usuario o la contraseña no coinciden.');
		}
		
		
	}else{
		
		printMessageError('Error!! por favor, complete todos los campos.');

	}

	


}

function checkForm(){
	var result= false;
	var listdata= document.querySelectorAll("input[type=text],input[type=password]");
	

	for (var i = 0; i < listdata.length; i++) {
		if (listdata[i].value.length === 0) {
			result = true;
			showError(listdata[i]);

		}
	}

	return result;
	
 }

