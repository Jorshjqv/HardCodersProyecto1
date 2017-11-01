


fillTable();
 document.querySelector('#addBtn').addEventListener('click',updateinfoPlace);


             

function fillTable() {
	 var pid = getUrlVars()["id"];
	
	 var listInfoPlace =  getAllInfoPlace(pid);
	  var size = Object.keys(listInfoPlace).length;


	  for (var i = 0; i < size; i++) {
	  				



				 	 document.querySelector('#placeName').value = listInfoPlace.name;
				 	 document.querySelector('#address').value = listInfoPlace.ubication;
				 	 document.querySelector('#latitude').value = listInfoPlace.latitud;
				 	 document.querySelector('#longitude').value = listInfoPlace.longitud;
				 	 document.querySelector('#person').value = listInfoPlace.contact_person;
				 	 document.querySelector('#phone').value = listInfoPlace.person_phone;
				 	 document.querySelector('#email').value = listInfoPlace.person_mail;
				 	 document.querySelector('#capacity').value = listInfoPlace.capacity;
				 	 if (listInfoPlace.monday == 1) {
				 	 	document.querySelector('#monday').checked = true;
				 	 }
				 	 if (listInfoPlace.tuesday == 1) {
				 	 	document.querySelector('#tuesday').checked = true;
				 	 }
				 	 if (listInfoPlace.wednesday == 1) {
				 	 	document.querySelector('#wensday').checked = true;
				 	 }
				 	 if (listInfoPlace.thursday == 1) {
				 	 	document.querySelector('#thursday').checked = true;
				 	 }
				 	 if (listInfoPlace.friday == 1) {
				 	 	document.querySelector('#friday').checked = true;
				 	 }
				 	 if (listInfoPlace.saturday == 1) {
				 	 	document.querySelector('#saturday').checked = true;
				 	 }
				 	 if (listInfoPlace.sunday == 1) {
				 	 	document.querySelector('#Sunday').checked = true;
				 	 }


				 	  document.querySelector('#starthour').value = listInfoPlace.begin_hour;
				 	  document.querySelector('#endhour').value = listInfoPlace.end_hour;





	  }








}



function updateinfoPlace(){
	//Hacer las validaciones
			 var pid = getUrlVars()["id"];
			var	 placeInfo=[];

			var placeName 	= document.querySelector('#placeName').value;
			var address 		= document.querySelector('#address').value;
			var latitude 		= document.querySelector('#latitude').value;
			var longitude	 	= document.querySelector('#longitude').value;
			var person		= document.querySelector('#person').value;
			var phone 		= document.querySelector('#phone').value;
			var email 		= document.querySelector('#email').value;
			var capacity 		= document.querySelector('#capacity').value;
			// var starthour = document.querySelector('#contStart').value;
			// var endhour = document.querySelector('#endhour').value;

			



	if (!check_form()) {

		if (!check_phone_input()) {
			if (!validate_Email()) {
				if (validateCheckBoxs()) {
							
						 		 placeInfo.push(pid,placeName,address,latitude,longitude,person,phone,email,capacity);
									updateInfoPlace(placeInfo);
									 updateInfoHorary(plisHoraryListToUpdate = get_values_to_update_horary());
								window.location.href ='../../views/places/list_places.php';
				}else {

					printMessageError("Por favor,seleccione al menos un dia en el espacio Horario.");
				}
			
			}
			else {
			
				printMessageError("Por favor,Ingrese un correo electronico valido.");
				
			}
			
		}else {
				printMessageError("Error!, telefono invalido.");
		}
		
	}else {
		printMessageError("¡Error!, Campos incompletos");
		
	}
			 












}
function get_values_to_update_horary(){
var newListHorary=[];
var startHour=document.querySelector('#starthour').value;
var endHour=document.querySelector('#endhour').value;
 var pid = getUrlVars()["id"];

var listHorary = document.querySelectorAll("input[type=checkbox]");

for(var i=0;i< listHorary.length;i++){

	if(listHorary[i].checked === true){
		newListHorary.push(listHorary[i] =1);
	}else {
		newListHorary.push(listHorary[i] =0);
	}


}	

	newListHorary.push(startHour,endHour,pid);

	return newListHorary;



	

}
function check_form(){
	
		var existsErorr=false;
		var error = false;
		var listdata= document.querySelectorAll("input");
		
		for (var i = 0; i < listdata.length; i++) {
			if (listdata[i].value.length == 0) {
				showError(listdata[i]);
				existsErorr= true;


			}else {
			removeError(listdata[i]);
			}
			}
		
		

		return existsErorr;

}
function validateCheckBoxs(){
	var Erorr=true;
	var cant =0;
	var checkboxList = document.querySelectorAll("input[type=checkbox]");
	for (var i = 0; i < checkboxList.length; i++) {
		if (checkboxList[i].checked){
					cant++;
						
				}
		
	}
	if (cant === 0) {
					Erorr = false;
				
	                     }
	
		return Erorr;
	
}
function check_phone_input(){
		
	var isPhoneNumber = false;
  	if (document.querySelector('#phone').value.length !== 8) {
  		 showError(document.querySelector('#phone'));
  		isPhoneNumber=true;
  	}else {
  		removeError(document.querySelector('#phone'));
  	}

  	return isPhoneNumber;
}

function validate_Email(){

		var error= false;
		if (validateEmail(document.querySelector('#email').value)=== false ) {
			showError(document.querySelector('#email'));
					error= true;
		}else {
			removeError(document.querySelector('#email'));
			
		}


			return error;

}


function getUrlVars() {
     var vars = {};
     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
     });
     return vars;
}