var botonAgregar= document.querySelector('#btnRegistrarOrganizacion');
botonAgregar.addEventListener('click',obtenerDatosRegistro);
drawDropdownOrgType();

function obtenerDatosRegistro(){
	var sNombre = '',
		sTipo = '',
		sCedJuridica = 0,
		sDescripcion = '',
		alert = document.querySelector('#alert');
		aInfoOrganizacion = [],

		bError = validateAllInputs();

  alert.innerHTML = ' ';
	sNombre = document.querySelector('#txtNombre').value;
	t = document.querySelector('#txtType');
	sTipo = t.options[t.selectedIndex].text;
	sCedJuridica = document.querySelector('#txtCedJuridica').value;
	sDescripcion = document.querySelector('#txtDescripcion').value;
	if(sCedJuridica == ''){
		sCedJuridica = 1;
	}

	if(bError){
		aInfoOrganizacion.push(sNombre,sDescripcion,sCedJuridica, Number(getOrganizationTypeId(sTipo)));
		registerOrganization(aInfoOrganizacion);

		window.location.href = '../../views/organization/report_organization.php';
	}else{
		var elements = document.querySelectorAll('input:required, textarea')
		for(var i = 0; i < elements.length; i++){
			if(elements[i].value == ''){
				alert.innerHTML = ' ';
				showError(elements[i]);
			}else{
				alert.innerHTML = '';
				removeError(elements[i]);
			}
		}

		printMessageError('Por favor rellene todos los campos');
	}
}

function drawDropdownOrgType(){
  var types = getOrganizationType();
	var selectType = document.querySelector('#txtType');

	for(var i = 0; i < types.length; i++){
		var option = document.createElement('option');
		option.id = types[i].id_organization_type;
		option.innerHTML = types[i].name_organization_type;
		selectType.appendChild(option);
	}
}

function getOrganizationTypeId(pName){
  var id = 0;
	var types = getOrganizationType();
	for(var i = 0; i < types.length; i++){
		if(types[i].name_organization_type == pName){
			id = types[i].id_organization_type;
		}
	}
	return id;
}

//Validation functions
function validateNumber(NumberToValidate){
	var returnBool = true;
	sCedJuridica = document.querySelectorAll('.number');
	if (isNaN(NumberToValidate) || NumberToValidate < 1 ){
        returnBool = false;
        showError(sCedJuridica[0]);
        printMessageError('Por favor utilice numeros en la cédula jurídica');
    }
	return returnBool;
}

function validateAllInputs(){
	var returnBool = true;
	var allInputs = document.querySelectorAll('input:required, textarea');
	for (var i = 0; i < allInputs.length; i++) {
		if (allInputs[i].required == true){
			if (!validateText(allInputs[i].value)) {
				returnBool = false;
			}else{
				allInputs[i].classList.remove('errorInput');
			}
		}
	}
	if(returnBool){
		document.getElementById('alert').classList.remove('error');
		//deleteAllMessages();
	}
	return returnBool;
}

function validateText(x) {
	var returnBool = true;
	if (x == "") {
        returnBool = false;
    }
	return returnBool;
}

function removeError(c){
	c.classList.remove('errorInput');
}

//error messages
function showError(inputError){
  inputError.classList.add('errorInput');
}


function printMessageError(pMsg){
  var notify = document.getElementById('alert');
  var textN = document.createTextNode(pMsg);
  var pTag = document.createElement("P");
  pTag.appendChild(textN);
  notify.appendChild(pTag);
  notify.classList.add('error');
}
