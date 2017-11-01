//Autor Jose Solano

var currentImages = loadAllImages();

function loadAllImages(){
  var userImg = [];
  var request  = $.ajax({
    url:'../../php/ImageSaver/getImageSaved.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'path' : '../../images/users'
    }
  });
  request.done(function(data){
    userImg = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return userImg;
}


function getUserImageName(userName){
 var splitName, resultImageName, user;
 user = userName.split("@");
 for (var i = 0; i < currentImages.length; i++) {
 	 var splitName = currentImages[i].split("@");
 	 if (splitName[0]  == user[0] ) {
 	 	resultImageName = currentImages[i];
 	 	break;
 	 };
 };
 return resultImageName;
}

function getFTCLogo(userName){

}
