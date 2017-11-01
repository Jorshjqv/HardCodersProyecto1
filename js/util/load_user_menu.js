insertUserImage();

if (document.getElementsByClassName('username')!=null){
	var divusername = document.getElementsByClassName('username');
	 var usernameHREFspot = divusername[0].getElementsByTagName("li")[0];
	divusername[0].appendChild(createCloseSessionBtn());
	usernameHREFspot.innerHTML = '';
	usernameHREFspot.appendChild(createUsernameHREF());
}

function createUsernameHREF(){
	var usernameHREF = document.createElement('a');
	var username = getUserName();
	var urlToProfile = "../../views/profile/perfil_personal.php?id="+username[0];
	usernameHREF.setAttribute("href", urlToProfile);
	if (username != null){
			usernameHREF.innerText = username[0];
	}
	else {usernameHREF.innerText = "Usuario";}
	return usernameHREF;
}

function insertUserImage(){
	var image=document.createElement('img');
	var userPhotoSpace = document.getElementById('userPhoto');
	var userInfo = getUserName();
	var fileImg = getUserImageName(userInfo[0]);
	image.src= '../../images/users/' + fileImg;
	image.classList.add('userImg');



	userPhotoSpace.appendChild(image);

}


function createCloseSessionBtn(){
	var btnCloseSession=document.createElement('input');
	btnCloseSession.setAttribute("type", "button");
	btnCloseSession.setAttribute("value", "Cerrar sesión");
	btnCloseSession.classList.add('btn');
	btnCloseSession.classList.add('btnImportant');
	btnCloseSession.addEventListener("click",closeSession);
	return btnCloseSession;
}

function closeSession(){

	var request = $.ajax({
		    url:'../../php/login_handler/login_handler.php',
		    dataType: 'json',
		    async: false,
		    method: 'post',
		    data:{


		      'function' : 'login_out'
		    }
		   });
			window.location.href='../../views/home/index.php';
}


function getUrlVars() {
     var vars = {};
     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
     });
     return vars;
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
  return userType;
}


//Codigo para cambiar nombre de la app
insertFTCLogo()
appName();
cambiarTitulo();
setUsername();

function getSystemSettings(){
	var organizations = [];
	var request = $.ajax({
		url:'../../php/db_interface/system_settings_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'getAllSettings'
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

function appName(){
	var settings = getSystemSettings();
	var setting = settings[0];

	var nombreCont= document.getElementsByClassName('alingNav');
	nombreCont[0].getElementsByTagName('h3')[0].innerHTML = setting['app_name'];
}

function cambiarTitulo(){
	document.getElementsByTagName('title')[0].innerHTML = '';
	var settings = getSystemSettings();
	var setting = settings[0];
	document.getElementsByTagName('title')[0].innerHTML = setting.app_name;
}

function getUserName(){
	var userInfo = [];
	var request = $.ajax({
		url:'../../php/session_handler/show_session_info.php',
		dataType: 'json',
		async: false,
		method: 'post',
	});
	request.done(function(data){
		userInfo = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});

	return userInfo;
}

function getUserIdByEmail(pEmail){
     var id = [];
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

function setUsername(){
	var aElement =  document.querySelector(".username a");
	var userInfo = getUserName();
	aElement.innerHTML = userInfo[0];
	var idUser = getUserIdByEmail(userInfo[0]);
	aElement.setAttribute("href", '../../views/profile/perfil_personal.php?id=' + idUser[0].id_user);
}

function insertFTCLogo(){
	var image=document.createElement('img');
	var userPhotoSpace = document.getElementById('logoFTC');
	var userInfo = getSystemSettings()[0];
	var fileImg = getUserImageName(userInfo.contact_mail);
	image.src= '../../images/users/' + fileImg;



	userPhotoSpace.appendChild(image);

}
