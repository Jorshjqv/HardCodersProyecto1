


function addPlace(newPlace){
	register_place(newPlace);
}


function register_place(plist_info_place){

	var request = $.ajax({
		url:'../../php/db_interface/place/place_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data:{
			'name_place': plist_info_place[0],
			'address': plist_info_place[1],
			'platitud': plist_info_place[2],
			'plongitud': plist_info_place[3],
			'contact_name': plist_info_place[4],
			'contac_personne_phone': plist_info_place[5],
			'contact_persone_email': plist_info_place[6],
			'capacity' : plist_info_place[7],
			'function' : 'register'
		}
	});

}
function get_list_places(){

	var placesList=[];

	var request = $.ajax({
    url:'../../php/db_interface/place/place_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'function' : 'get_all_places'
    }
   });
	
	request.done(function(data){
    placesList = data;
 	 });
	 request.fail(function(){
    console.log('Error de conexion a la BD');
  });



 return placesList;



}
function get_last_idplace_registered(){
	var lastid;


	var request = $.ajax({

	url:'../../php/db_interface/place/place_db_interface.php',
	dataType: 'json',
	async: false,
	method: 'post',
	data: {
		'function' : 'getLastId'
	}
	});
	request.done(function(data){
		lastid=data;
	});
	 request.fail(function(){
	    console.log('Error de conexion a la BD');
	 });




	return lastid;




}
function register_horary(plistInfoHorary){

	var request = $.ajax({
		url:'../../php/db_interface/place/place_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data:{
			'pmonday': plistInfoHorary[0],
			'ptuesday': plistInfoHorary[1],
			'pwednesday': plistInfoHorary[2],
			'pthursday': plistInfoHorary[3],
			'pfriday': plistInfoHorary[4],
			'psaturday': plistInfoHorary[5],
			'psunday': plistInfoHorary[6],
			'pbegin_hour' : plistInfoHorary[7],
			'pend_hour' : plistInfoHorary[8],
			'p_place_id' : plistInfoHorary[9],
			'function' : 'registerHorary'
		}
	});


}
function  delete_Place(pi_place){


var request = $.ajax({
   url:'../../php/db_interface/place/place_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'p_id_place': pi_place,
      'function' : 'deletePlace'
    }
   });



}

function getAllInfoPlace(pIdPlace){

	var placeInformation;



	var request = $.ajax({

	 url:'../../php/db_interface/place/place_db_interface.php',
	dataType: 'json',
	async: false,
	method: 'post',
	data: {
		'p_id_place' : pIdPlace,
		'function' : 'getAllPlaceInformation'
	}
	});
	request.done(function(data){
		placeInformation=data;
	});
	 request.fail(function(){
	    console.log('Error de conexion a la BD');
	 });




	return placeInformation;



}
function updateInfoPlace(pListInfoToUpdate){

	var request = $.ajax({
		 url:'../../php/db_interface/place/place_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data:{
			'name_place': pListInfoToUpdate[1],
			'address': pListInfoToUpdate[2],
			'platitud': pListInfoToUpdate[3],
			'plongitud': pListInfoToUpdate[4],
			'contact_name': pListInfoToUpdate[5],
			'contact_person_phone': pListInfoToUpdate[6],
			'contact_person_email': pListInfoToUpdate[7],
			'capacity' : pListInfoToUpdate[8],
			'p_id_place': pListInfoToUpdate[0],
			'function' : 'updatePlace'
		}
	});
}

function updateInfoHorary(plistInfoHorary){

	var request = $.ajax({
		 url:'../../php/db_interface/place/place_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data:{
			'p_place_id' : plistInfoHorary[9],
			'pmonday': plistInfoHorary[0],
			'ptuesday': plistInfoHorary[1],
			'pwednesday': plistInfoHorary[2],
			'pthursday': plistInfoHorary[3],
			'pfriday': plistInfoHorary[4],
			'psaturday': plistInfoHorary[5],
			'psunday': plistInfoHorary[6],
			'pbegin_hour' : plistInfoHorary[7],
			'endHour' : plistInfoHorary[8],
			'function' : 'updateHorary'
		}
	});



}