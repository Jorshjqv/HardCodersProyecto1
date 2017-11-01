
botonEditar = document.querySelector('#btnEditar');
botonEditar.addEventListener('click', obtenerDatosRegistro);


var botonLogo = document.querySelector('#btnModificarLogo');
botonLogo.addEventListener('click', logo);

function obtenerDatosRegistro(){
	var sNombre       = document.querySelector('#txtNombreAplicacion').value,
	sEmail          = document.querySelector('#txtEmail').value,
	sPhone          = document.querySelector('#txtPhone').value,
	sDireccion      = document.querySelector('#txtDireccion').value,
	sLatitud        = document.querySelector('#txtLatitud').value,
	sLongitud       = document.querySelector('#txtLongitud').value,
	aInfoAplicacion = [];

	var alert = document.querySelector('#alert');
	var validated = validateAllInputs();
  alert.innerHTML = '';

  if(document.querySelector('#txtNombreAplicacion').disabled){
		enableEditSettings();
		botonEditar.value = "Guardar";
	}else{
		if(validated){
			alert.innerHTML = '';
			aInfoAplicacion.push(sNombre, sDireccion, sEmail,sPhone,sLatitud,sLongitud);
			updateSystemSettings(aInfoAplicacion);
			SaveImage();
			botonEditar.value = "Modificar";
			document.querySelector('#txtNombreAplicacion').disabled = true;
			document.querySelector('#txtEmail').disabled = true;
			document.querySelector('#txtPhone').disabled = true;
			document.querySelector('#txtDireccion').disabled = true;
			document.querySelector('#txtLatitud').disabled = true;
			document.querySelector('#txtLongitud').disabled = true;

		}else{
			var elements = document.querySelectorAll('input:required, textarea');
			for(var i = 0; i < elements.length; i++){
				if(elements[i].value == ''){
					alert.innerHTML = '';
					showError(elements[i]);
					printMessageError('Por favor rellene todos los campos');
				}else if(elements[i].id == 'txtPhone'){
					if(isNaN(elements[i].value)){
						alert.innerHTML = '';
						showError(document.querySelector('#txtPhone'));
						printMessageError('Por favor use solo números para este campo');
					}
				}else{
					removeError(elements[i]);
				}
			}
		}
	}

}



function logo(){
	var input = document.querySelector('#btnModificarLogo');
	input.type = 'file';
}


llenarFormulario();

function llenarFormulario(){
	var datos = getSystemSettings();

	for(var i = 0; i < datos.length; i++){
		document.querySelector('#txtNombreAplicacion').value = datos[i]['app_name'];
		document.querySelector('#txtNombreAplicacion').disabled = true;
		document.querySelector('#txtEmail').value =  datos[i]['contact_mail'];
		document.querySelector('#txtEmail').disabled = true;
		document.querySelector('#txtPhone').value =  datos[i]['contact_phone'];
		document.querySelector('#txtPhone').disabled = true;
		document.querySelector('#txtDireccion').value =  datos[i]['direction'];
		document.querySelector('#txtDireccion').disabled = true;
		document.querySelector('#txtLatitud').value =  datos[i]['latitud'];
		document.querySelector('#txtLatitud').disabled = true;
		document.querySelector('#txtLongitud').value =  datos[i]['longitud'];
		document.querySelector('#txtLongitud').disabled = true;
	}

}

function validateAllInputs(){
	var returnBool = true;
	var allInputs = document.querySelectorAll('input:required, textarea');
	for (var i = 0; i < allInputs.length; i++) {
		if (!validateText(allInputs[i].value)) {
			returnBool = false;
			showError(allInputs[i]);
		}else if(allInputs[i].id == 'txtPhone'){
			if(!validateNumber(allInputs[i].value)){
				returnBool = false;
			}
		}else{
			allInputs[i].classList.remove('errorInput');
		}

	}
	return returnBool;
}

function enableEditSettings(){
	document.querySelector('#txtNombreAplicacion').disabled = false;
	document.querySelector('#txtEmail').disabled = false;
	document.querySelector('#txtPhone').disabled = false;
	document.querySelector('#txtDireccion').disabled = false;
	document.querySelector('#txtLatitud').disabled = false;
	document.querySelector('#txtLongitud').disabled = false;
}


/*-------modificar logo con base 64-----------//
function readFilePrintV() {

if (this.files && this.files[0]) {

var FR= new FileReader();

FR.addEventListener("load", function(e) {
console.log(e.target.result);
});

FR.readAsDataURL( this.files[0] );
}

}
document.getElementById("btnModificarLogo").addEventListener("change", readFile);

function readFile() {

if (this.files && this.files[0]) {

var FR= new FileReader();

FR.addEventListener("load", function(e) {
document.getElementById("img").src       = e.target.result;
document.getElementById("b64").innerHTML = e.target.result;
});

FR.readAsDataURL( this.files[0] );
}

}*/
