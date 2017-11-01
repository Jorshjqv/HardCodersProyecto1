
function check_if_user_exists(puser_name,pPassword){

	var result;
	var request = $.ajax({
    url:'../../php/db_interface/login/check_exists_user.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{

      'p_username':puser_name,
      'p_password': pPassword,
      'function' : 'checkUser'
    }
   });
	request.done(function(data){
		result = data;
	});
	 request.fail(function(){
	    console.log('Error de conexion a la BD');
	 });
	//console.log(result);
	 	return result;

}


function validate_username_password(puser_nane,pPassword){

// var result;
	var request = $.ajax({
    url:'../../php/login_handler/login_handler.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{

      'puser_mail':puser_nane,
      'pPassword': pPassword,
      'function' : 'login'
    }
   });

}

function randomPassword(lengthPass) {//begin of randomPassword
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < lengthPass; x++) {//begin of for
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}
function sendMail(password, email, name){
  var request = $.ajax({
    url:'../../php/email_sender/send_mail_lost_password.php',
    dataType: 'json',
    method: 'post',
    data:{
       'password' : password,
       'to': email,
       'message': "Su clave de acceso es: ",
       'name': name,
       'subject': "Departamento de soporte técnico"
    }
  });
}

function check_mail_get_name(mail){
var userType ;
   var request = $.ajax({
    url:'../../php/db_interface/login/check_exists_user.php',
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
function changeLostPassword(pUserName,pTemporaryPassword){


   var request = $.ajax({
    url:'../../php/db_interface/login/check_exists_user.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
        'mail': pUserName,
        'password':pTemporaryPassword,
        'is_fisrt_login': 1,
       'function' : 'change_password'
    }
  });

}
