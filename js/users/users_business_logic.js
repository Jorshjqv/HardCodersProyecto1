//Autor Jose Solano

function getuserTypeDB(){
  var userType = [];
  var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'function' : 'getUserType'
    }
  });
  request.done(function(data){
    userType = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return userType;
}


function getAcademyDB(){
  var userType = [];
  var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'function' : 'getAcademiesDropDown'
    }
  });
  request.done(function(data){
    userType = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return userType;
}

function getTeachersForAcademy(idAcademy){
   var userType = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': idAcademy,
      'function' : 'getTeacherForAcademy'
    }
  });
  request.done(function(data){
    userType = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return userType;
}

function getCategoryAge(userAge){
 var userType = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'age': userAge,
      'function' : 'getCategoryByAge'
    }
  });
  request.done(function(data){
    userType = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return userType;
}

function getCategoryLevel(){
 var userType = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
       'function' : 'getCategoryLevel'
    }
  });
  request.done(function(data){
    userType = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return userType;
}

function getUserWeightCate(weight){
 var userType = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
        'weight': weight,
       'function' : 'getCategoryWeight'
    }
  });
  request.done(function(data){
    userType = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return userType;
}

function SaveUserData(arrSave){
  var name = arrSave[1].split(" ");
  var lastname = arrSave[2].split(" ");
  name[1] = typeof name[1] == 'undefined' ? " " : name[1];
  lastname[1] = typeof lastname[1] == 'undefined' ? " " : lastname[1];
  var password = randomPassword(6);
  sendMail(password, arrSave[4], arrSave[1]);
  var age = document.querySelector('#categoryAge').getAttribute('data-age');
  var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
        'user_id': arrSave[0],
        'first_name': name[0],
        'second_name': name[1],
        'lastname1': lastname[0],
        'lastname2': lastname[1],
        'phone': arrSave[3],
        'birth': arrSave[5],
        'age': age,
        'email': arrSave[4],
        'gender': arrSave[7],
        'password': password,
        'firstLog': arrSave[6],
        'usertype': 1,
        'status': 1,
        'function' : 'insert'
    }
  });
  request.done(function(data){
    console.log('exito');
  });
  request.fail(function(){
    console.log('fail');
  });

}

function SaveTeacher(arrSave){
var userType = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
        'id_user': arrSave[1],
        'id_academy': arrSave[0],
       'function' : 'SaveTeacher'
    }
  });
  request.done(function(data){
    userType = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return userType;
}

function SaveAthelte(arrSave){
var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
        'weight': arrSave[6],
        'height': arrSave[1],
        'won_tornaments': arrSave[8],
        'exibitions_participated': arrSave[7],
        'tornaments_participated': arrSave[9],
        'id_user': arrSave[12],
        'Teacher_id_teacher': arrSave[5],
        'Academy_id_academy': arrSave[0],
        'CategoryLevel_id_category_level': arrSave[2],
        'CategoryWeight_id_category_weight': arrSave[11],
        'CategoryAge_id_category_age': arrSave[10],
        'function' : 'SaveAthelet'
    }
  });
  request.done(function(data){
    console.log('exito');
  });
  request.fail(function(){
    console.log('fail');
  });
}
function randomPassword(lengthPass) {//begin of randomPassword
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < lengthPass; x++) {//begin of for
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }//end of for
    return pass;
}//end of randomPassword

function checkmail(mail){
var userType = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
        'mail': mail,
       'function' : 'checkMail'
    }
  });
  request.done(function(data){
    userType = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return userType;
}

function getUserId(id){
var userType = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
        'id': id,
       'function' : 'getuserId'
    }
  });
  request.done(function(data){
    userType = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return userType;
}

function getAllUsers(){
  var users = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
       'function' : 'getAllUsers'
    }
  });
  request.done(function(data){
    users = data;
  });
  request.fail(function(){
  });
  return users;
}

function updateUsers(){
  var id = this.name;
  window.location.href='../../views/users/modify_user.php?id='+id;
}

function updateStudents(){
  var id = this.name;
  window.location.href='../../views/users/modify_stundent.php?id='+id;
}
function showUserProfi(){
  var id = this.name;
  window.location.href='../../views/profile/perfil_personal.php?id='+id;

}

function deleteUser(){
var id = this.name;
showModal(id, updsateInactiveUser);
}

function updsateInactiveUser(id){

  $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
       'id': id,
       'function' : 'deleteUser'
    }
  });
  Redirect();
}

function SaveImage(){
 var form = new FormData(document.getElementById('upload_img'));
    var email = document.getElementById("txtEmailUser").value;
    //append files
    var file = document.getElementById('imageUser').files[0];
    if (file) {
        form.append('imageUser', file);
        form.append('email', email);
    }
    $.ajax({
        type: "POST",
        url: "../../php/ImageSaver/saveImage.php",
        data: form,
        async: false,
        cache: false,
        contentType: false, //must, tell jQuery not to process the data
        processData: false,
        //data: $("#upload_img").serialize(),
        success: function(data)
        {
            if(data == 1)
               console.log("heroe");
            else
              console.log("palo");
        }
    });
    //alert('names');
}
function sendMail(password, recipient, name){
  var request = $.ajax({
    url:'../../php/email_sender/sendMail.php',
    dataType: 'json',
    method: 'post',
    data:{
       'password' : password,
       'to': recipient,
       'message': "Su clave de acceso es: ",
       'name': name,
       'subject': "¡Bienvenido! Acceso a la cuenta"
    }
  });

  request.done(function(data){
  console.log("enviado");
  });
  request.fail(function(){
  console.log("fallido");
  });
}

function Redirect() {
      window.location.href = "list_users.php";
 }
function RedirectToStudent() {
      window.location.href = "list_student.php";
 }

 function getUrlVars() {
     var vars = {};
     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
     });
     return vars;
}

function getUserToModify(id){
  var users = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
       'function' : 'getUserForModify'
    }
  });
  request.done(function(data){
    users = data;
  });
  request.fail(function(){
  });
  return users;
}

function UpdateUserData(arrSave, id){
  var name = arrSave[1].split(" ");
  var lastname = arrSave[2].split(" ");
  var age = document.querySelector('#categoryAge').getAttribute('data-age');
  var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
        'id':id,
        'user_id': arrSave[0],
        'first_name': name[0],
        'second_name': name[1],
        'lastname1': lastname[0],
        'lastname2': lastname[1],
        'phone': arrSave[3],
        'birth': arrSave[5],
        'age': age,
        'gender': arrSave[7],
        'function' : 'updateUser'
    }
  });
  request.done(function(data){
    console.log('exito');
  });
  request.fail(function(){
    console.log('fail');
  });

}

function modifyUserData(pInfoUser, pId){
  var name = pInfoUser[1].split(" ");
  var lastname = pInfoUser[2].split(" ");
  var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
        'id':pId,
        'user_id': pInfoUser[0],
        'first_name': name[0],
        'second_name': name[1],
        'lastname1': lastname[0],
        'lastname2': lastname[1],
        'phone': pInfoUser[6],
        'birth': pInfoUser[3],
        'age': pInfoUser[4],
        'gender': pInfoUser[5],
        'function' : 'updateUser'
    }
  });
  request.done(function(data){
    console.log('exito');
  });
  request.fail(function(){
    console.log('fail');
  });
}

function getTeacherToModify(id){
  var users = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
       'function' : 'getTeacherForModify'
    }
  });
  request.done(function(data){
    users = data;
  });
  request.fail(function(){
  });
  return users;
}

function getStudentsByTeacher(id){
  var users = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
       'function' : 'getStudentsByTeacherId'
    }
  });
  request.done(function(data){
    users = data;
  });
  request.fail(function(){
  });
  return users;
  }

  function getStudentsByAcademyId(id){
    var students = [];
    var request = $.ajax({
      url:'../../php/db_interface/user_db_interface.php',
      dataType: 'json',
      async:false,
      method: 'post',
      data:{
        'academyID': id,
        'function' : 'getStudentsByAcademyId'
      }
    });
    request.done(function(data){
      students = data;
    });
    request.fail(function(){
    });
    return students;
    }

function UpdateTeacher(arrSave){
var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
        'id':arrSave[1],
        'id_academy': arrSave[0],
        'function' : 'updateTeacher'
    }
  });
  request.done(function(data){
    console.log('exito');
  });
  request.fail(function(){
    console.log('fail');
  });
}
function UpdateAthelte(arrSave, id){
var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
        'id': id,
        'weight': arrSave[6],
        'height': arrSave[1],
        'won_tornaments': arrSave[8],
        'exibitions_participated': arrSave[7],
        'tornaments_participated': arrSave[9],
        'Teacher_id_teacher': arrSave[5],
        'Academy_id_academy': arrSave[0],
        'CategoryLevel_id_category_level': arrSave[2],
        'CategoryWeight_id_category_weight': arrSave[11],
        'CategoryAge_id_category_age': arrSave[10],
        'function' : 'UpdateAthelet'
    }
  });
  request.done(function(data){
    console.log('exito');
  });
  request.fail(function(){
    console.log('fail');
  });
}

function modifyAthlete(arrAthlete, pid){
  var request = $.ajax({
      url:'../../php/db_interface/user_db_interface.php',
      dataType: 'json',
      async:false,
      method: 'post',
      data:{
          'id': pid,
          'weight': arrAthlete[0],
          'height': arrAthlete[1],
          'won_tornaments': arrAthlete[2],
          'exibitions_participated': arrAthlete[3],
          'tornaments_participated': arrAthlete[4],
          'Teacher_id_teacher': arrAthlete[5],
          'Academy_id_academy': arrAthlete[6],
          'CategoryLevel_id_category_level': arrAthlete[7],
          'CategoryWeight_id_category_weight': arrAthlete[8],
          'CategoryAge_id_category_age': arrAthlete[9],
          'function' : 'UpdateAthelet'
      }
    });
    request.done(function(data){
      console.log('exito');
    });
    request.fail(function(){
      console.log('fail');
    });
}

function getStudentToModify(id){
  var users = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
       'function' : 'getStudentForModify'
    }
  });
  request.done(function(data){
    users = data;
  });
  request.fail(function(){
  });
  return users;
}

function checkUserId (id){
   var userId = [];
   var request = $.ajax({
    url:'../../php/db_interface/user_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'id': id,
       'function' : 'checkUserId'
    }
  });
  request.done(function(data){
    userId = data;
  });
  request.fail(function(){
  });
  return userId;
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
      //console.log('Error de conexion a la BD');
    });
    return id;

}
