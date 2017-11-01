/*Autor Jose Solano*/

function dayOfTheWeek(daySelected) {

	var dayWeek = daySelected.getDay();

	return dayWeek

}
function todayDay(){

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd<10){
    dd='0'+dd;
	}
	if(mm<10){
    mm='0'+mm;
	}

	today = yyyy+'-'+mm+'-'+dd;

	return today;
}

function getAllEvents() {

	var allEventsInserted =[];
	var request = $.ajax({
		url:'../../php/db_interface/event_list_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'getAllEventsDB'
		}
	});
	request.done(function(data){
		allEventsInserted = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});
  return allEventsInserted;
}

function getAllPastEvents() {

	var today = todayDay();
	var allEventsInserted =[];
	var request = $.ajax({
		url:'../../php/db_interface/event_list_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'date' : today,
			'function': 'getAllPastEventDB'
		}
	});
	request.done(function(data){
		allEventsInserted = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});
  return allEventsInserted;
}

function getAllCurrentEvents() {

	var today = todayDay();
	var allEventsInserted =[];
	var request = $.ajax({
		url:'../../php/db_interface/event_list_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'date' : today,
			'function': 'getAllPresentEventDB'
		}
	});
	request.done(function(data){
		allEventsInserted = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});
  return allEventsInserted;
}

function getAllFutureEvents() {

	var today = todayDay();
	var allEventsInserted =[];
	var request = $.ajax({
		url:'../../php/db_interface/event_list_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'date' : today,
			'function': 'getAllFutureEventDB'
		}
	});
	request.done(function(data){
		allEventsInserted = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});
  return allEventsInserted;
}

function deleteEvent(){
var id = this.name;
showModal(id,updateInactiveEvent);
}

function updateInactiveEvent(id){

  $.ajax({
    url:'../../php/db_interface/event_list_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
       'id': id,
       'function' : 'deleteEventDB'
    }
  });
RedirectListEvents();
}


//------------------Finish of List of Events Functions

//------------------Event Registration Functions

function RedirectListEvents() {
      window.location.replace("event_list.php");
 }

function getEventTypeList() {

	var allEventTypeList =[];
	var request = $.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'getEventTypeListDB'
		}
	});
	request.done(function(data){
		allEventTypeList = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});

  return allEventTypeList;
}

function getPlaceList() {

	var allPlaceList =[];
	var request = $.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'getPlaceListDB'
		}
	});
	request.done(function(data){
		allPlaceList = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});

  return allPlaceList;
}

function getPlaceDays(placeId) {

	var allPlaceList =[];
	var request = $.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'idP': 'placeId',
			'function': 'getPlaceDaysDB'
		}
	});
	request.done(function(data){
		allPlaceList = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});

  return allPlaceList;
}

function getPlaceSchedule(placeId) {

	var allPlaceList =[];
	var request = $.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'idP': 'placeId',
			'function': 'getPlaceScheduleDB'
		}
	});
	request.done(function(data){
		allPlaceList = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});

  return allPlaceList;
}

function createNewEvent(arrSave){

  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
        'name': arrSave[0],
        'beginDay': arrSave[1],
        'endDay': arrSave[2],
        'beginhour': arrSave[4],
        'endHour': arrSave[7],
        'inscripPrice': arrSave[3],
        'availableTickets': arrSave[5],
        'ticketPrice': arrSave[6],
        'soldTickets': 0,
        'addedConfig': 0,
        'previousData': 0,
        'isFinished': 0,
        'status': 1,
        'placeId': arrSave[8],
		'eventType': arrSave[9],
        'function' : 'eventRegistrationDB'
    }
  });
  request.done(function(data){
    console.log('Conexion exitosa');;
  });
  request.fail(function(){
    console.log('Conexion fallida');
  });

}

function setJsonToCalendar(allEvents, isEdited, id){
	var eventos = getEventsList();
	if(isEdited){
		for (var i = 0; i < eventos.length; i++) {
			if(eventos[i].id == id){
				eventos[i].end = allEvents[3];
				eventos[i].start = allEvents[2];
				eventos[i].title = allEvents[1];
				return saveOnLocalStorage('eventInCalendar', eventos);
			}
		};
	}
	eventCreated.end = allEvents[3];
	eventCreated.start = allEvents[2];
	eventCreated.title = allEvents[1];
	eventCreated.id = allEvents[0];
	eventos.push(eventCreated);
	saveOnLocalStorage('eventInCalendar', eventos);
}


function saveOnLocalStorage(key, arrayToSave){
	localStorage.setItem(key, JSON.stringify(arrayToSave));
}

var eventCreated = {
}

function getEventsList() {
    var eventsforcalendar = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'function' : 'getEventsForCalendar'
    }
  });
  request.done(function(data){
    eventsforcalendar = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return eventsforcalendar;
}

function getCategoriesOnEvent(id){
 var categoriesOnEvent = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
    	'id': id,
      'function' : 'getCategoriesOnEvent'
    }
  });
  request.done(function(data){
    categoriesOnEvent = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return categoriesOnEvent;
}

function getEvent(id){
 var eventID = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
			'id': id,
      'function' : 'getEventID'
    }
  });
  request.done(function(data){
    eventID = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return eventID;
}

function validateCapacityInplace(place, capacityRequested){
	var allPlaces = getPlaceCapacity(place);

	if(allPlaces[0].capacity >= capacityRequested){
		return true;
	}
	else{
		return false;
	}
}

function getPlaceHorary(id) {

	var allPlaceList =[];
	var request = $.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'id': id,
			'function': 'getEventPlaceCapacityDB'
		}
	});
	request.done(function(data){
		allPlaceList = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});

  return allPlaceList;
}

function getStudentsByCategories(level, weight, age, gender, idAcademy){
  var studentsCategories = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
    	'level': level,
    	'weight': weight,
    	'age': age,
    	'gender': gender,
    	'academy': idAcademy,
    	'function' : 'getStudentsByCategories'
    }
  });
  request.done(function(data){
    studentsCategories = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return studentsCategories;
}

function getPlaceUnAvailable(beginDay,endDay,beginTime,endTime) {

	var allPlaceList =[];
	var request = $.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'beginD':beginDay,
			'endD':endDay,
			'beginH':beginTime,
			'endH':endTime,
			'function': 'getPlaceUnAvailableDB'
		}
	});
	request.done(function(data){
		allPlaceList = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});

  return allPlaceList;
}

function getAcdemiesOnEvent(id){
  var academies = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
      'function' : 'getAcdemiesOnEvent'
    }
  });
  request.done(function(data){
    academies = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return academies;
}

function SaveAtheleOnEvent (idEvent,idAtlete) {
$.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'idEvent':idEvent,
			'idAtlete':idAtlete,
			'pWeCere':0,
			'position':0,
			'points':0,
			'function': 'SaveAtheleOnEvent'
		}
	});
}

function getEventTypeByEventId(id){
  var eventType = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
      'function' : 'getEventTypeByEventId'
    }
  });
  request.done(function(data){
    eventType = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return eventType;
}

function updateUserParticipation(eventType, idAthelte){

	var addTornament = eventType == 1 ? 1 : 0;
	var addExhibition = eventType == 2 ? 1 : 0;

	$.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'idAthelte':idAthelte,
			'tornametPar':addTornament,
			'exhibition':addExhibition,
			'function': 'updateUserParticipation'
		}
	});
}

function getAllAthetlesOnevent(id){
	var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
      'function' : 'getAllAthetlesOnevent'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function getWeightByID(id){
	var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
      'function' : 'getRangeWeight'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function SaveWeight(id, weight, idEvent){
	var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
      'weight': weight,
      'idEvent': idEvent,
      'function' : 'saveWeightCeremony'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}
function desqualifyStudentOnEvent(id, KO){
	var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
      'ko': KO,
      'function' : 'desqualified'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function getAcademiesList(){
  var acedemiesList = [];
  var request = $.ajax({
    url:'../../php/db_interface/academies_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'function' : 'getAllAcademies'
    }
  });
  request.done(function(data){
    acedemiesList = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return acedemiesList;
}
function getOrganizations(){
	var organizations = [];
	var request = $.ajax({
		url:'../../php/db_interface/organizations_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'getAllOrganizations'
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

function categoryWeight(){
	var category = [];
	var request = $.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'getAllWeight'
		}
	});
	request.done(function(data){
		category = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});
	return category;
}

function categoryLevels(){
	var category = [];
	var request = $.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'getAllLevels'
		}
	});
	request.done(function(data){
		category = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});
	return category;
}

function categoryAges(){
	var category = [];
	var request = $.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'getAllAges'
		}
	});
	request.done(function(data){
		category = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});
	return category;
}
function getSponsorsList(){
  var sponsorList = [];

 var request = $.ajax({
    url:'../../php/db_interface/sponsors_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'function' : 'getAllSponsors'
    }
   });
  request.done(function(data){
    sponsorList = data;
  });
   request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return sponsorList;

}

function getProductBySposorID(id){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
      'function' : 'productBySponsor'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;

}
function saveAcademiesOnEvent(idEve, idaca){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'idEvent': idEve,
      'idAca':idaca,
      'function' : 'saveAcademyOnevent'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function SaveOrgOnevent(idEve, idaca){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'idEvent': idEve,
      'idorg':idaca,
      'function' : 'saveorganizationOnevent'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;

}

function SaveCategoriesOnevent(idEve, arrToseve){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'idEvent': idEve,
      'idweight': arrToseve[0],
      'idage': arrToseve[1],
      'idlevel': arrToseve[2],
      'gender': arrToseve[3],
      'function' : 'saveCategoryonEvent'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function SaveSponsorOnEvent(idEve, idSponsor){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'idEvent': idEve,
      'idposorID':idSponsor,
      'function' : 'saveSponsorOnEvent'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function SaveProductOnEvent(idEve, idProduct){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'idEvent': idEve,
      'idsponsor':idProduct[1],
      'idproduct': idProduct[0],
      'function' : 'saveproductOneEvent'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}
function saveResultsOnEvent(eventid, idAthelte, position, points){
$.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'idAthelte':idAthelte,
			'eventid':eventid,
			'position':position,
			'points':points,
			'function': 'saveResults'
		}
	});
}

function getPlaceByEvent(idEve){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': idEve,
      'function' : 'getPlaceEvent'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function randomPasswordEvent(lengthPass) {//begin of randomPassword
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < lengthPass; x++) {//begin of for
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }//end of for
    if(pass == ''){randomPasswordEvent(6)}
    return pass;
}

function sendMailToClient(password, recipient, name, cant){
  var request = $.ajax({
    url:'../../php/email_sender/sendTiketSold.php',
    dataType: 'json',
    method: 'post',
    data:{
       'password' : password,
       'to': recipient,
       'message': cant,
       'name': name,
       'subject': "Compra de entradas para el evento "+name,
    }
  });

  request.done(function(data){
  console.log("enviado");
  });
  request.fail(function(){
  console.log("fallido");
  });
}

function UpdateEvent(eventid, sold, availableTickets){
$.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'eventid':eventid,
			'sold':sold,
			'available':availableTickets,
			'function': 'UpdateBuyEvent'
		}
	});
}

function CleanElementsOnEvent(eventid){
$.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'eventid':eventid,
			'function': 'cleanEvent'
		}
	});
}

function CleanResults(eventid){
$.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'eventid':eventid,
			'function': 'cleanResult'
		}
	});
}

function CleanWeight(eventid){
$.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'eventid':eventid,
			'function': 'cleanWeigh'
		}
	});
}

function CleanAthe(eventid){
$.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'eventid':eventid,
			'function': 'cleanInscription'
		}
	});
}

function updateConfigEvent(eventid){
	$.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'eventid':eventid,
			'function': 'updateConfig'
		}
	});
}

function updateWeightEvent(eventid){
	$.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'eventid':eventid,
			'function': 'updtateWeight'
		}
	});
}

function updateFinishEvent(eventid){
	$.ajax({
		url:'../../php/db_interface/event_register_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'eventid':eventid,
			'function': 'UpdateResult'
		}
	});
}

function editEvent(){
	window.location.replace("modifySettingUpEvent.php?id="+this.name);
}

function getInfoRegistred(idEve){
	var athetles = [];
    var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'eventid': idEve,
      'function' : 'getAllInfoFromEvent'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function getUrlVars() {
     var vars = {};
     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
     });
     return vars;
}

function modifyEvent(arrSave, eventid){

  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
    	'eventid': eventid,
        'name': arrSave[0],
        'beginDay': arrSave[1],
        'endDay': arrSave[2],
        'beginhour': arrSave[4],
        'endHour': arrSave[7],
        'inscripPrice': arrSave[3],
        'availableTickets': arrSave[5],
        'ticketPrice': arrSave[6],
        'placeId': arrSave[8],
		'eventType': arrSave[9],
        'function' : 'updateEvent'
    }
  });
  request.done(function(data){
    console.log('Conexion exitosa');;
  });
  request.fail(function(){
    console.log('Conexion fallida');
  });
}


function getOrg(idEve){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'eventid': idEve,
      'function' : 'getOrg'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function getProduct(idEve){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'eventid': idEve,
      'function' : 'getProduct'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function getSponsor(idEve){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'eventid': idEve,
      'function' : 'getSponsor'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function GetMailParticipants(idEve){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'eventid': idEve,
      'function' : 'mails'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function getTeacherEvents(idEve){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'eventid': idEve,
      'function' : 'getTeacherEvents'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

function sendInvitation(password, recipient, name, cant, date){
  var request = $.ajax({
    url:'../../php/email_sender/sendInvitacionEvent.php',
    dataType: 'json',
    method: 'post',
    data:{
       'password' : password,
       'to': recipient,
       'message': cant,
       'name': name,
       'date': date,
       'subject': "Invitación al evento "+ cant,
    }
  });

  request.done(function(data){
  console.log("enviado");
  });
  request.fail(function(){
  console.log("fallido");
  });
}

function getStudentsEvents(idEve){
var athetles = [];
  var request = $.ajax({
    url:'../../php/db_interface/event_register_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'eventid': idEve,
      'function' : 'getStudentsEvents'
    }
  });
  request.done(function(data){
    athetles = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athetles;
}

	function getSponsorTypeName(pId){
    var name = '';
		var request = $.ajax({
			url:'../../php/db_interface/sponsors_db_interface.php',
	    dataType: 'json',
	    async:false,
	    method: 'post',
	    data:{
	      'id_sponsor_type': pId,
	      'function' : 'getSponsorTypeName'
	    }
		});
		request.done(function(data){
			name = data
		});
		request.fail(function(){

		});
	}
