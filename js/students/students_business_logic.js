
//--------------------------------Get User

function getUsersList() {//begin of getUsersList
  //variables declaration
  var usersList= JSON.parse(localStorage.getItem('arrUser'));
  var activeList= []

  if(usersList== null) {//begin of if

    usersList= [];

  }else {

    for (var i = 0; i < usersList.length; i++) {
      if(usersList[i][10] == true) {

        activeList.push(usersList[i]);

      }
    }
  }

return activeList;

}//end of getUsersList

//--------------------------------------Insert User

function insertUser(arrUserInterface) {//begin of insertUser
  //variables declaration
  var usersList= getUsersList();

  usersList.push(arrUserInterface);
  localStorage.setItem('arrUser', JSON.stringify(usersList));

}//end of insertUser

//-----------------------------Get User Age

function getAge(DOB) {//begin of getAge
  var today = new Date();
  var birthDate = new Date(DOB);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {//begin of if
    age = age - 1;
  }//end of if
  if (age < 0 || age == 0) {//begin of if

    showError(document.querySelector("#dateBirthUser"));

  }//end of if
    return age;
  }//end of getAge

//---------------------------------Dynamic Selects

function getOptionsArrange(select,data) {//begin of getOptionsArrange

  for (var i = 0; i < data.length; i++) {//begin of for
      var opt = document.createElement('option');
      opt.value = data[i][0];
      opt.innerHTML = data[i][1];
      select.appendChild(opt);

  }//end of for
}//end of getOptionsArrange

//-----------------------Random Password

function randomPassword(lengthPass) {//begin of randomPassword
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < lengthPass; x++) {//begin of for
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }//end of for
    return pass;
}//end of randomPassword

function getImgSrcPNG(userId){//begin of getImgSrcPNG
  var srcName = userId + '.png';
  return srcName;
}//end of getImgSrcPNG

//--------------------Search Select User

function storeUserId(pId){//begin of storeUserId
  localStorage.setItem('currentUserName', JSON.stringify(pId));
}//end of storeUserId

function searchUserById(pId){//begin of searchUserById
  var userList = getUsersList();
  var foundUser = [];
  for(var i = 0; i < userList.length; i++){
    if(userList[i][0] == pId && userList[i][10] == true){
      foundUser = userList[i];
    }
  }
  return foundUser;
}//end of searchUserById

//----------------------------Modify User

function modifyUser(pUser){//begin of modifyUser
  var userList =  getUsersList();
  for(var i = 0; i < userList.length; i++){
    if(userList[i][0] === pUser[0]){
      userList[i] = pUser;
    }
  }
  localStorage.setItem('arrUser', JSON.stringify(userList));
}//end of modifyUser

//---------------------------------------Validation functions

function validateText(TextToValidate) {//begin of validateText
	var returnBool = true;
	if (TextToValidate == "") {
        returnBool = false;
    }
	return returnBool;
}//end of validateText

function validateSelect() {//begin of validateSelect
	var returnBool = true;
  var selectInputs = document.querySelectorAll('select:required');

  	for(var i= 0; i < selectInputs.length; i++){
  		if(selectInputs[i].value== "Escoger una opción"){
        showError(selectInputs[i]);
  			returnBool = false;
  		}
  	}
	return returnBool;//end of validateSelect
}

function validateDate(DateToValidate) {//begin of validateDate
	var returnBool = true;
  var today = new Date();
	if (DateToValidate <= today) {
        returnBool = false;
    }
	return returnBool;
}//end of validateDate

function validateNumber(NumberToValidate){//begin of validateNumber
	var returnBool = true;
	if (isNaN(NumberToValidate) || NumberToValidate < 1 || NumberToValidate > 99999999) {
        returnBool = false;
    }
	return returnBool;
}//end of validateNumber

function validateEmail(EmailToValidate){//begin of validateEmail
	var atPos = EmailToValidate.indexOf("@");
    var dotPos = EmailToValidate.lastIndexOf(".");
	var returnBool = true;
    if (atPos<1 || dotPos<atPos+2 || dotPos+2>=EmailToValidate.length) {
        returnBool = false;
    }
	return returnBool;
}//end of validateEmail

function validatePhone (telToValidate) {begin of validatePhone

  var returnBool= true

  if (telToValidate.length > 8 || telToValidate.lenght < 8) {
    showError(telToValidate);
    returnBool= false;

  }
  return returnBool
}//end of validatePhone


function validateForRadios() {//begin of validateForRadios

	var validated = true;
	var radioInputs = document.querySelectorAll('input[type=radio]');
	for(var i= 0; i < radioInputs.length; i++){
		if(radioInputs[i].value== null){
      showError(radioInputs[i]);
			validated = false;
		}
	}
	return validated;
}//end of validateForRadios
