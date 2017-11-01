
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

function getCurrentEvent(){
  var id = getUrlVars()['id'];
  var events = getAllEvents();
  var currentEvent = [];
  for(var i = 0; i < events.length; i++){
    if(events[i]["id_event"] == id){
      currentEvent = events[i];
    }
  }
  return currentEvent;
}

//actual report functions

function getEventPlace(){
  var currentEvent = getCurrentEvent();
  var places = getPlaces();
  var currentPlace = '';
  for(var i = 0; i < places.length; i++){
    if(places[i]['id_place'] == currentEvent['Place_id_place']){
      currentPlace = places[i]['name'];
    }
  }
  return currentPlace;
}


//New functions for php
function getAllEvents(){
  var events = [];
  var request = $.ajax({
    url: '../../php/db_interface/statistics_report_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data: {
      'function': 'getAllEvents'
    }
  });
  request.done(function(data){
    events = data;
  });
  request.fail(function(){

  });
  return events;
}

function getAthletesOnEvent(){
  var athletes = [];
  var request = $.ajax({
    url: '../../php/db_interface/statistics_report_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data: {
      'function': 'getAthletesOnEvent'
    }
  });
  request.done(function(data){
    athletes = data;
  });
  request.fail(function(){

  });
  return athletes;
}

function getParticipationOnEvent(){
  var athletes = getAthletesOnEvent();
  var currentEvent = getCurrentEvent();
  var participation = 0;

  for(var i = 0; i < athletes.length; i++){
    if(athletes[i]['Event_id_event'] == currentEvent['id_event']){
      participation += 1;
    }
  }
  return participation;
}

function getEventPlaceName(){
  var currentEvent = getCurrentEvent();
  var places = getPlaces();
  var name = ' ';

  for(var i = 0; i < places.length; i++){
    if(places[i]['id_place'] == currentEvent['Place_id_place']){
      name = places[i]['name'];
      break;
    }
  }
  return name;
}
function getPlaces(){
  var places = [];
  var request = $.ajax({
    url: '../../php/db_interface/place/place_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data: {
      'function': 'get_all_places'
    }
  });
  request.done(function(data){
    places = data;
  });
  request.fail(function(){

  });
  return places;
}
