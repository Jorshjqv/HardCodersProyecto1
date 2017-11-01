/*
function guardarParametros(pConfiguracion){
	localStorage.setItem('arrSettings', JSON.stringify(pConfiguracion));
	modoVista();

}

function cambiarParametros(){
	var input = document.querySelector('#btnModificarLogo');

	if(input.type == 'file'){
		var logo = input.value;

		//llamar a la funcion file reader
		input.type = 'button';
	}

}

function obtenerDatosConfiguracion(){
	var datos =  JSON.parse(localStorage.getItem('arrSettings'));
	if(datos == null){
		datos = [];
	}
    return datos;
}

function modoVista(){
	var inputs = [];
	inputs = document.querySelectorAll('.mod');

	for(var i=0; i<inputs.length; i++){
		inputs[i].readOnly = true;
	}

	botonEditar.value = 'Actualizar';
}

function editar(){
	botonEditar.value = 'Guardar';
	var inputs = [];
	inputs = document.querySelectorAll('.mod');

	for(var i=0; i<inputs.length; i++){
		inputs[i].readOnly = false;
	}
    if(botonEditar.value == 'Guardar'){
    	botonEditar.addEventListener('click', obtenerDatosRegistro );
    }

}
*/

//Validations
function validateEmail(EmailToValidate){
	var atPos = EmailToValidate.indexOf("@");
    var dotPos = EmailToValidate.lastIndexOf(".");
    var inputEmail= document.querySelector('#txtEmail');

	var returnBool = true;
    if (atPos<1 || dotPos<atPos+2 || dotPos+2>=EmailToValidate.length) {
        returnBool = false;
        showError(inputEmail);
    }else{
    	inputEmail.classList.remove('errorInput');
    }
	return returnBool;
}
function validarVacios(){
	var aInputs = document.querySelectorAll('input:required, textarea');
	var bError = false;

	for (var i=0;i<aInputs.length;i++){
		if(aInputs[i].value == ''){
			aInputs[i].classList.add('error');
			bError = true;
		}else{
			aInputs[i].classList.remove('error');
			bError= false;
		}
	}
	if(bError){
		alert("campos obligatorios");
	}
return bError;
}

function validateNumber(NumberToValidate){
	var returnBool = true;
	if (isNaN(NumberToValidate)){
        returnBool = false;
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

//new functions php

function insertSystemSettings(pSetttings){
	request = $.ajax({
		url: '../../php/db_interface/system_settings_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'papp_name': pSettings[0],
			'pdirection': pSettings[1],
			'pcontact_mail': pSettings[2],
			'pcontact_phone': pSettings[3],
			'platitud': pSettings[4],
			'plongitud': pSettings[5],
			'function': 'registerSystemSettings'
		}
	});
	request.done(function(data){

	});
	request.fail(function(){

	});
}

function getSystemSettings(){
	var organizations = [];
	var request = $.ajax({
		url:'../../php/db_interface/system_settings_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'getAllSettings'
		}
	});
	request.done(function(data){
		organizations = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});
	return organizations;
}

function updateSystemSettings(pSettings){
	var request = $.ajax({
		url: '../../php/db_interface/system_settings_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'updateSystemSettings',
			'papp_name': pSettings[0],
			'pdirection': pSettings[1],
			'pcontact_mail': pSettings[2],
			'pcontact_phone': pSettings[3],
			'platitud': pSettings[4],
			'plongitud': pSettings[5]
		}
	});
	request.done(function(data){

	});
	request.fail(function(){

	});
}

function SaveImage(){
 var form = new FormData(document.getElementById('upload_img'));
    var email = document.getElementById("txtEmail").value;
    //append files
    var file = document.getElementById('btnModificarLogo').files[0];
    if (file) {
        form.append('imageUser', file);
        form.append('email', email);
    }
    $.ajax({
        type: "POST",
        url: "../../php/ImageSaver/saveImage.php",
        data: form,
        async: false,
        cache: false,
        contentType: false, //must, tell jQuery not to process the data
        processData: false,
        //data: $("#upload_img").serialize(),
        success: function(data)
        {
            if(data == 1)
               console.log("heroe");
            else
              console.log("palo");
        }
    });
    //alert('names');
}
