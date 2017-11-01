if (document.querySelector('#addBtn') != null) {
	document.querySelector('#addBtn').addEventListener('click',
												getInsertData);
}




function getInsertData(){
  var placeInfo = [];
  var listValuesHorary=[];
  placeName 	= document.querySelector('#placeName').value;
  address 		= document.querySelector('#address').value;
  latitude 		= document.querySelector('#latitude').value;
  longitude	 	= document.querySelector('#longitude').value;
  person		= document.querySelector('#person').value;
  phone 		= document.querySelector('#phone').value;
  email 		= document.querySelector('#email').value;
  capacity 		= document.querySelector('#capacity').value;


		
	if (!check_form()) {

		if (!check_phone_input()) {
			if (!validate_Email()) {
				if (validateCheckBoxs()) {
							
						 		
						 			placeInfo.push(placeName,
												address,
												latitude,
												longitude,
												person,
												phone,
												email,
												capacity);
								addPlace(placeInfo);
								register_horary(listValuesHorary = get_values_to_insert_horary());
								
								
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



function get_values_to_insert_horary(){
var newListHorary=[];
var startHour=document.querySelector('#starthour').value;
var endHour=document.querySelector('#endhour').value;
var lastIdPlace = get_last_idplace_registered();

var listHorary = document.querySelectorAll("input[type=checkbox]");

for(var i=0;i< listHorary.length;i++){

	if(listHorary[i].checked === true){
		newListHorary.push(listHorary[i] =1);
	}else {
		newListHorary.push(listHorary[i] =0);
	}


}	
	newListHorary.push(startHour,endHour,parseInt(lastIdPlace.id_place));
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

