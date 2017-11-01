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

function getAcademybyId(id){
  var acedemiesList = [];
  var request = $.ajax({
    url:'../../php/db_interface/academies_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'function' : 'getAcademyByID',
      'idToEdit' : id
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


function addAcademy(newAcademy){
  var request = $.ajax({
    url:'../../php/db_interface/academies_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'name': newAcademy[0],
      'direction': newAcademy[1],
      'phone': newAcademy[2],
      'contactperson': newAcademy[3],
      'email': newAcademy[4],
      'function' : 'register'
    }
  });
  request.done(function(data){
    //console.log("");
  });
  request.fail(function(){
    //console.log('');
  });
}

function editAcademy(id,newData){
  var request = $.ajax({
    url:'../../php/db_interface/academies_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'idToEdit':id,
      'name': newData[0],
      'direction': newData[1],
      'phone': newData[2],
      'contactperson': newData[3],
      'email': newData[4],
      'function' : 'update'
    }
  });
  request.done(function(data){
    //console.log("");
  });
  request.fail(function(){
    //console.log('');
  });
}

function inactivateAcademy(id) {
  var request = $.ajax({
    url:'../../php/db_interface/academies_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'idToEdit': id,
      'status': 0,
      'function' : 'inactivate'
    }
  });
  location.reload();
  request.done(function(data){
  });
  request.fail(function(){
  });
}
