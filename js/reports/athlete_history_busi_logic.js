

//Danilo


function getInfoAthlete(id){
  var allAlthetes =  getAllAthletes();
   var returnList = [];

  for (var i = 0; i < allAlthetes.length; i++) {
    if (allAlthetes[i].idAthlete == id) {
        returnList = allAlthetes[i];

    }
   
  }


  return returnList;

 
}






function generateChartDataset(athleteId) {
  var eventsList = getAllInfoAthleteAllEvents(athleteId);
  var pointsArray = [];
  var datesArray = [];




  for (var i = 0; i < eventsList.length; i++) {
    pointsArray.push(parseInt(eventsList[i].points_on_event));
    datesArray .push(eventsList[i].name);

  }

  var returnArray = [datesArray,pointsArray];

  return returnArray;


}



//Danilo


function getAllEventsByAthleteId(id){
  
    var allEventsPerAtlhete = [];

  var request = $.ajax({
    url:'../../php/db_interface/history_report_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'id_atlhete':id,
      'function' : 'get_all_events_per_Athlete'
    }
   });
  
  request.done(function(data){
    allEventsPerAtlhete = data;
   });
   request.fail(function(){
    console.log('Error de conexion a la BD');
  });

   return allEventsPerAtlhete;






}






// Funciones que se conectan a la base de datos.
function getAllAthletes(){
  var athletesList=[];

  var request = $.ajax({
    url:'../../php/db_interface/history_report_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'function' : 'getAllAheletes'
    }
   });
  
  request.done(function(data){
    athletesList = data;
   });
   request.fail(function(){
    console.log('Error de conexion a la BD');
  });

   return athletesList;
 
}

function get_all_atheleOnEvent(){

   var allAhtletesOnEvent=[];

  var request = $.ajax({
    url:'../../php/db_interface/history_report_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'function' : 'getAllAthletesOnEvent'
    }
   });
  
  request.done(function(data){
    allAhtletesOnEvent = data;
   });
   request.fail(function(){
    console.log('Error de conexion a la BD');
  });

   return allAhtletesOnEvent;

  


}
function getUserIdByEmail(pEmail){
     var id = 0;
     var request = $.ajax({
      url:'../../php/db_interface/user_db_interface.php',
      dataType: 'json',
      async:false,
      method: 'post',
      data:{
         'email': pEmail,
         'function' : 'getUserIdByEmail'
      }
    });
    request.done(function(data){
      id = data;
    });
    request.fail(function(){
      console.log('Error de conexion a la BD');
    });
    return id;

}
function getTeacherId(ipd){

    var id = 0;
   var request = $.ajax({
    url:'../../php/db_interface/history_report_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'puserId': ipd,
       'function' : 'getTeacherID'
    }
  });
  request.done(function(data){
    id = data;
  });
  request.fail(function(){
     console.log('Error de conexion a la BD');
  });
  return id;






}
function get_Students_By_Teacher(id){
  var athletesList=[];
   var request = $.ajax({
    url:'../../php/db_interface/history_report_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
       'function' : 'getStudentsByTeacherId'
    }
  });
  request.done(function(data){
    athletesList = data;
  });
  request.fail(function(){
  });
  return athletesList;
  }
  
  function getAllInfoAthleteAllEvents(pid){


    var InfoList=[];
   var request = $.ajax({
    url:'../../php/db_interface/history_report_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'pid': pid,
       'function' : 'getAllInfoOfAthleteInAllEvents'
    }
  });
  request.done(function(data){
    InfoList = data;
  });
  request.fail(function(){
  });
  return InfoList;




  }
  function get_average_points_per_Athlete(pid){

      var average = 0;

     var request = $.ajax({
    url:'../../php/db_interface/history_report_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'pid': pid,
       'function' : 'averaPoints'
    }
  });
  request.done(function(data){
    average = data;
  });
  request.fail(function(){
  });
 var averageReturn= parseInt(average[0].averagePoints);
  return averageReturn;

}
function getAthleteIdByUserName(puserName){

  var id = 0;
   var request = $.ajax({
    url:'../../php/db_interface/history_report_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'puserName': puserName,
       'function' : 'getAthleteID'
    }
  });
  request.done(function(data){
    id = data;
  });
  request.fail(function(){
     console.log('Error de conexion a la BD');
  });
   var Returnid= parseInt(id[0].idAthlete)
  return Returnid;



}

