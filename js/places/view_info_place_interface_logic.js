fillTable();
document.querySelector('#backBtn').addEventListener('click',redirectToNewPage);


function fillTable(){

var pid = getUrlVars()["id"];

 

 var listInfoPlace =  getAllInfoPlace(pid);

 var size = Object.keys(listInfoPlace).length;
 

 for (var i = 0; i < size ; i++) {



 	
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
function redirectToNewPage(){
	window.location.href ='../../views/places/list_places.php';

}



function getUrlVars() {
     var vars = {};
     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
     });
     return vars;
}