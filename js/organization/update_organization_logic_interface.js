var botonGuardar = document.querySelector('#btnGuardar');
botonGuardar.addEventListener('click',getUpdateData);
fillForm();
drawDropdownOrgType();

function getUpdateData(){
	var sNombre = '',
		sTipo = '',
		sCedJuridica = 0,
		sDescripcion = '',
		alert = document.querySelector('#alert'),
		aInfoOrganizacion = [],
		btnModSave = document.querySelector('#btnGuardar'),
		id = getUrlVars()['id'],
		bError = validateAllInputs();

  alert.innerHTML = ' ';
	sNombre = document.querySelector('#txtNombreOrga').value;
	t = document.querySelector('#txtTipoOrga');
	sTipo = t.options[t.selectedIndex].text;
	sCedJuridica = document.querySelector('#txtCedJuridica').value;
	sDescripcion = document.querySelector('#txtDescripcionOrga').value;

  if(document.querySelector('#txtNombreOrga').disabled == true){
     enableModification();
		 btnModSave.value = "Guardar";
	}else{
		if(bError){
			aInfoOrganizacion.push(id, sNombre,sDescripcion,getOrganizationTypeId(sTipo));
			updateOrganization(aInfoOrganizacion);

			window.location.href = '../../views/organization/report_organization.php';
		}else{
			var elements = document.querySelectorAll('input:required, textarea');
			for(var i = 0; i < elements.length; i++){
				if(elements[i].value == ''){
					alert.innerHTML = ' ';
					showError(elements[i]);
				}else if(isNaN(elements[1].value)){
					alert.innerHTML = ' ';
					showError(document.querySelector('#txtCedJuridica'));
					printMessageError('Por favor use solo números para la Cédula jurídica.');
				}else{
					alert.innerHTML = '';
					removeError(elements[i]);
				}
			}

			printMessageError('Por favor rellene todos los campos');
		}
	}

}

function enableModification(){
	document.querySelector('#txtNombreOrga').disabled = false;
	document.querySelector('#txtTipoOrga').disabled = false;
	//document.querySelector('#txtCedJuridica').disabled = false;
	document.querySelector('#txtDescripcionOrga').disabled = false;
}
/*
function obtenerDatosModificar(){

	var sName = '',
		sType = '',
		sId = '',
		sDesc = '',
		aInfoOrga = [],
		bEstado = true,
		sCod = true,
		bError = false;

	sName = document.querySelector('#txtNombreOrga').value;

	sType = document.querySelector('#txtTipoOrga').value;
	sId = document.querySelector('#txtCedJuridica').value;
	sDesc = document.querySelector('#txtDescripcionOrga').value;
	sCod = document.querySelector('#txtCodigo').value;


	if(validateAllInputs() && !bError){
		aInfoOrga.push(sCod,sName,sType,sDesc,sId,bEstado);
		modificarDatosOrga(aInfoOrga);
		window.location.href = "../../views/organization/report_organization.html";
	}


}
*/
/*
function obtenerOrgaModificar(){
	var orgaModificar= JSON.parse(localStorage.getItem('orgaModificarLS'));
	return orgaModificar;

}
*/
function getOrganizationById(){
	var id = getUrlVars()['id'];
	var organizations = getOrganizations();
	var organizationInfo = [];
	for(var i = 0; i < organizations.length; i++){
		if(organizations[i].id_organization == id){
			organizationInfo = organizations[i];
		}
	}
	return organizationInfo;
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

function getOrganizationTypeName(pId){
	var types = getOrganizationType();
	var name = ' ';
	for(var i = 0; i < types.length; i++){
		if(types[i].id_organization_type == pId){
			name = types[i].name_organization_type;
		}
	}
	return name;
}

function fillForm(){
	var id = getUrlVars()['id'];
	var organizationInfo = getOrganizationById();
	var orgName = getOrganizationTypeName(organizationInfo.OrganizationType_id_organization_type);

	document.querySelector('#txtNombreOrga').value = organizationInfo.name_organization;
	document.querySelector('#txtNombreOrga').disabled = true;
	document.querySelector('#txtTipoOrga').innerHTML = orgName;
	document.querySelector('#txtTipoOrga').disabled = true;
	document.querySelector('#txtCedJuridica').value = organizationInfo.legal_document;
	document.querySelector('#txtCedJuridica').disabled = true;
	document.querySelector('#txtDescripcionOrga').value = organizationInfo.description;
	document.querySelector('#txtDescripcionOrga').disabled = true;
}

function drawDropdownOrgType(){
  var types = getOrganizationType();
	var selectType = document.querySelector('#txtTipoOrga');

	for(var i = 0; i < types.length; i++){
		var option = document.createElement('option');
		option.id = types[i].id_organization_type;
		option.innerHTML = types[i].name_organization_type;
		selectType.appendChild(option);
	}
}


//Validation functions
function validateNumber(NumberToValidate){
	var returnBool = true;
	sCedJuridica = document.querySelectorAll('.number');
	if (isNaN(NumberToValidate) || NumberToValidate < 1 ){
        returnBool = false;
        showError(sCedJuridica[0]);
        printMessageError();
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
			}else if(!validateNumber(allInputs[1].value)){
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


/*
function llenarInputsModificar(){
	var orgaModificar =  getOrganizationById();
	var tipo = orgaModificar[2];
	var sltIndex = -1

	switch(tipo){
		case 'Gubernamental':
			sltIndex = 0;
		break;
		case 'No-gubernamental':
			sltIndex = 1;
		break;
		case 'Caridad':
			sltIndex = 2;
		break;
		case 'Fines de lucro':
			sltIndex = 3;
		break;
		case 'Sin fines de lucro':
			sltIndex = 4;
		break;


	}

	document.querySelector('#txtCodigo').value = orgaModificar[0];
	document.querySelector('#txtNombreOrga').value = orgaModificar[1];
	document.querySelector('#txtTipoOrga').selectedIndex = sltIndex;
	document.querySelector('#txtCedJuridica').value = orgaModificar[4];
	document.querySelector('#txtDescripcionOrga').value = orgaModificar[3];
}
*/
