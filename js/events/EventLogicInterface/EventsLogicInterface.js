//Autor JOSE SOLANO

//Cargar Dropdows
loadDropdowns();

//Vartiables universales

	var  btnCreate = document.querySelector("#createEvent");
	btnCreate.addEventListener('click', saveEvent);


var  eventToCreate  =  document.querySelector("#eventName");
var  dateToBegintEvet  =  document.querySelector("#dateBegin");
var  dateToEndEvent  =  document.querySelector("#dateEnd");
var  timeToBeginEvent  =  document.querySelector('#timeBegin');
var  timeToEndEvent  =  document.querySelector('#timeEnd');
var  priceInsert  =  document.querySelector("#priceIns");
var  placeOfEvet  =  document.querySelector("#place");
var  pirceTicket  =  document.querySelector("#priceEnter");
var  evetType  =  document.querySelector("#evetType");
var capacity = document.querySelector("#available");

//Agregar Ewventos

/*eventToCreate.addEventListener('change', changeBoder);
dateToBegintEvet.addEventListener('change', checkEventBeginDayPlace);
dateToEndEvent.addEventListener('change', checkEventEndDayPlace);
timeToBeginEvent.addEventListener('change', checkEventBeginTimePlace);
timeToEndEvent.addEventListener('change', checkEventEndTimePlace);
priceInsert.addEventListener('change',changeBoder );
placeOfEvet.addEventListener('change', validatePlace);
pirceTicket.addEventListener('change', changeBoder);
evetType.addEventListener('change', changeBoder);
capacity.addEventListener('change', validateCapacity);

if(btnCreate != null){
	capacity.disabled = true;
}else{
	capacity.disabled = false;
}

var errors = false;
var idEvent = 0;*/

/*Funcionalidad*/
function loadDropdowns(){

/*if (dateToBegintEvet.value != null && dateToEndEvent.value != null && timeBegin.value != null && timeToEndEvent.value != null){

var unavailablePlaces = getPlaceUnAvailable(dateToBegintEvet.value,dateToEndEvent.value,timeBegin.value,timeToEndEvent.value);

}*/
	loadEventType();
	//unavailablePlaces dentro de loadPlace
	loadPlace();
}

function loadEventType(){
  var eventListType = getEventTypeList();
  var select = document.querySelector('#evetType');

  var optionType = document.createElement('option');
  optionType.value = '';
  optionType.text = 'Seleccione un tipo de evento';
  select.appendChild(optionType);

  for(var i = 0; i < eventListType.length; i++){
    var opcion = document.createElement('option');
    opcion.value = eventListType[i].id_event_type;
    opcion.text = eventListType[i].name;
    select.appendChild(opcion);
  }
}
//Place_id_place
// dentro de loadPLace unavailablePlacesList
function loadPlace () {
  var placeListType = getPlaceList();
  var select = document.querySelector('#place');
  var optionType = document.createElement('option');

  optionType.value = '';
  optionType.text = 'Seleccione un lugar';
  select.appendChild(optionType);

  for(var i = 0; i < placeListType.length; i++){
    var opcion = document.createElement('option');
    opcion.value = placeListType[i].id_place;
    opcion.text = placeListType[i].name;
    select.appendChild(opcion);
  }
}

function saveEvent () {
	var valueEvet = eventToCreate.value;
	var valueDateToBegintEvet = dateToBegintEvet.value;
	var valueDatoEndEvent = dateToEndEvent.value;
	var valuetimeToBeginEvent  =  timeToBeginEvent.value;
	var valuetimeToEndEvent  =  timeToEndEvent.value;
	var valuePriceInset = priceInsert.value;
	var valueCapacity = capacity.value;
	var valuePirceTicket = pirceTicket.value;
	//sold tickets int
	//added config tiny int
	//previous data tiny int
	//is finished tiny int
	//status tiny int
	var valuePlaceOfEvet = placeOfEvet.value;
	var valueEvetType = evetType.value;


	/*var continueSaving = validateNull();
	var validateNumbersForm = validateInputNumbers(priceInsert,pirceTicket,capacity);
	if(continueSaving || errors || validateNumbersForm){
		printMessageError();
		return;
	}
	if(Date.parse(valueDatoEndEvent) < Date.parse(valueDateToBegintEvet)){
		printMessageError();
		return;
	}*/
	var events = [valueEvet,valueDateToBegintEvet,valueDatoEndEvent,valuetimeToBeginEvent,valuetimeToEndEvent,valuePriceInset,valueCapacity,valuePirceTicket,0,0,0,0,1,valuePlaceOfEvet,valueEvetType];

	createNewEvent(events);

	RedirectListEvents();
}


function validateNull(){
	var errosFind =false;
	var inputValues = [eventToCreate,
					  dateToBegintEvet,
					  dateToEndEvent,
						timeToBeginEvent,
						timeToEndEvent,
					  priceInsert,
					  placeOfEvet,
					  pirceTicket,
					 evetType,
					 capacity];

	for (var i = 0; i < inputValues.length; i++) {
		if(!validateText(inputValues[i].value)){
			showError(inputValues[i]);
			errosFind =true;
		}
	};
	return errosFind;
}

function showError(inputError){
    inputError.classList.add('errorInput');
}

function changeBoder(){
	this.classList.remove('errorInput');
}

function validatePlace(){

	this.classList.remove('errorInput');
	capacity.disabled = false;
}

function validateCapacity(){
	var capasityRequested = Number(this.value);
	var place =document.querySelector("#place").value;
	var result = validateCapacityInplace(place, capasityRequested);
	if (result == true){
		this.classList.remove('errorInput');
		this.classList.add('allowInput');
		errors = false;
	}
	else{
		errors = true;
		this.classList.remove('allowInput');
		this.classList.add('errorInput');
	}
}

function checkEventBeginDayPlace() {
	var placeId = document.querySelector("#place").value;
	var bDay = document.querySelector("#dateBegin").value;
	var dayNumber = dayOfTheWeek(bDay);

	if (bDay != null && placeId != null){

	var  dayAvailables= getPlaceDays(placeId);

	if (dayAvailables[dayNumber] == 1){
		this.classList.remove('errorInput');
		this.classList.add('allowInput');
		errors = false;
	}
	else{
		errors = true;
		this.classList.remove('allowInput');
		this.classList.add('errorInput');
	}
	}

}
function checkEventEndDayPlace() {
	var placeId = document.querySelector("#place").value;
	var eDay = document.querySelector("#dateEnd").value;
	var dayNumber = dayOfTheWeek(eDay);

	if (eDay != null && placeId != null){

	var  dayAvailables= getPlaceDays(placeId);

	if (dayAvailables[dayNumber] == 1){
		this.classList.remove('errorInput');
		this.classList.add('allowInput');
		errors = false;
	}
	else{
		errors = true;
		this.classList.remove('allowInput');
		this.classList.add('errorInput');
	}
	}

}
function checkEventBeginTimePlace() {
	var placeId = document.querySelector("#place").value;
	var bTime = document.querySelector("#timeBegin").value;

	if (bTime != null && placeId != null){

	var  timeAvailables= getPlaceSchedule(placeId);

	if (timeAvailables[0].end_hour > bTime || timeAvailables[0].begin_hour < bTime){
		this.classList.remove('errorInput');
		this.classList.add('allowInput');
		errors = false;
	}
	else{
		errors = true;
		this.classList.remove('allowInput');
		this.classList.add('errorInput');
	}
	}

}
function checkEventEndTimePlace() {
	var placeId = document.querySelector("#place").value;
	var eTime = document.querySelector("#timeEnd").value;
	var  timeAvailables= getPlaceSchedule(placeId);

	if (eTime != null && placeId != null){

	var  timeAvailables= getPlaceSchedule(placeId);

	if (timeAvailables[1].end_hour < eTime || timeAvailables[1].begin_hour > eTime){
		this.classList.remove('errorInput');
		this.classList.add('allowInput');
		errors = false;
	}
	else{
		errors = true;
		this.classList.remove('allowInput');
		this.classList.add('errorInput');
	}
	}

}

function printMessageError(){
	var notify = document.getElementById('alert');
    var textN = document.createTextNode("¡Error! Verifique los campos");
    var pTag = document.createElement("P");
	pTag.appendChild(textN);
    notify.appendChild(pTag);
    notify.classList.add('error');
}

 function validateInputNumbers(valuePriceInset,valuePirceTicket,valueCapacity){
 	var result = false;
 	var isNumeric = [valuePriceInset,valuePirceTicket,valueCapacity];
 	for (var i = 0; i < isNumeric.length; i++) {
 		if(!validateNumber(isNumeric[i].value)){
 			showError(isNumeric[i]);
 			result = true;
 		}
 	};
 	return result;
 }

function updateData(){
	var valueEvet = eventToCreate.value;
	var valueDateToBegintEvet = dateToBegintEvet.value;
	var valueDatoEndEvent = dateToEndEvent.value;
	var timeToBeginEvent = timeToBeginEvent.value
	var	timeToEndEvent = timeToEndEvent.value
	var valuePriceInset = priceInsert.value;
	var valuePlaceOfEvet = placeOfEvet.value;
	var valuePirceTicket = pirceTicket.value;
	var valueEvetType = evetType.value;
	var valueCapacity = capacity.value;

	var continueSaving = validateNull();
	var validateNumbersForm = validateInputNumbers(priceInsert,pirceTicket,capacity);
	if(continueSaving || errors || validateNumbersForm){
		printMessageError();
		return;
	}
	var arrUpdateEvent = [this.name, valueEvet,valueDateToBegintEvet, valueDatoEndEvent , timeToBeginEvent, timeToEndEvent, valuePriceInset, valuePlaceOfEvet, valueCapacity, valuePirceTicket, valueEvetType, 0, true, false,false,false,false];

	upDateEvent(arrUpdateEvent, this.name);

	Redirect();
}
