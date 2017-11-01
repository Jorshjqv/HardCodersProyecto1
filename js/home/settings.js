
systemSettings();


function systemSettings(){
	contacto();
	direccion();



}
/*
function obtenerParametrosSistema(){
	var arrSettings = JSON.parse(localStorage.getItem('arrSettings'));
	if(arrSettings == null){
		arrSettings = [];
	}

	return arrSettings;
}
*/
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

function contacto(){

	var settings = getSystemSettings()[0];
	var contactCont = document.getElementsByClassName('contact-info');
	contactCont[1].getElementsByTagName('p')[1].innerHTML =settings.contact_mail;


}
function direccion(){
	var settings = getSystemSettings()[0];
	var direccion = document.getElementsByClassName('contact-info');
	direccion[0].getElementsByTagName('p')[0].innerHTML =settings.direction;
}

function initMap(){
	var settings = getSystemSettings()[0],
	    latitud = settings.latitud;
	    longitud = settings.longitud;

	var maP = document.querySelector('.contact-img');



	var coordenadas = new google.maps.LatLng(latitud,longitud);

	var mapOptions = {zoom: 16,center: coordenadas,mapTypeControl: false,
	  	mapTypeId: google.maps.MapTypeId.ROADMAP};

	var mapita = new google.maps.Map(maP, mapOptions);

	 var marker = new google.maps.Marker({
    position: coordenadas,
    map: mapita,
    title: 'Posición actual'
  });
}
