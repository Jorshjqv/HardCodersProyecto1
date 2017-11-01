function getAllCategoriesOnEventByEventId(id){
  var categoriesList = [];
  var request = $.ajax({
    url:'../../php/db_interface/reports_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id':id,
      'function' : 'getAllCategoriesOnEventByEventId'
    }
  });
  request.done(function(data){
    categoriesList = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return categoriesList;
}

function getAthleteOnEventByEventId(id){
  var athleteList = [];
  var request = $.ajax({
    url:'../../php/db_interface/reports_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id':id,
      'function' : 'getAthleteOnEventByEventId'
    }
  });
  request.done(function(data){
    athleteList = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athleteList;
}


function getAthleteOnCategoryAndEvent(id,age,level,weight,gender){
  var athleteList = [];
  var request = $.ajax({
    url:'../../php/db_interface/reports_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id':id,
      'age':age,
      'level':level,
      'weight':weight,
      'gender':gender,
      'function' : 'getAthleteOnCategoryAndEvent'
    }
  });
  request.done(function(data){
    athleteList = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return athleteList;
}
